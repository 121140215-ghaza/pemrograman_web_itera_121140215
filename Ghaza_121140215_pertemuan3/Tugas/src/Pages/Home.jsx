import { useState } from "react";
import { BookForm } from "../components/BookForm";
import { BookList } from "../components/BookList";
import { BookFilter } from "../components/BookFilter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useBooks } from "../context/BookContext"; 

export default function Home() {
  const { books, dispatch } = useBooks();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const visibleBooks = books
    .filter((b) => filter === "All" || b.status === filter)
    .filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));

  const handleSubmit = (book) => {
    dispatch({ type: editing ? "UPDATE" : "ADD", payload: book });
    setEditing(null);
    setDialogOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch({ type: "REMOVE", payload: id });
    }
  };

  return (
    <section className="space-y-6">
      {/* filter + search */}
      <div className="flex flex-wrap gap-4 mb-6">
        <BookFilter value={filter} onChange={setFilter} />
        <Input
          placeholder="Search title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-56"
        />
      </div>

      {/* dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setDialogOpen(true);
              setEditing(null);
            }}
          >
            Add Book
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>{editing ? "Edit Book" : "Add a New Book"}</DialogTitle>
          <DialogDescription>
            {editing
              ? "Edit the details of the selected book."
              : "Fill out the form to add a new book."}
          </DialogDescription>
          <BookForm current={editing} onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      {/* book list */}
      <BookList
        books={visibleBooks}
        onEdit={(book) => {
          setEditing(book);
          setDialogOpen(true);
        }}
        onDelete={handleDelete}
      />
    </section>
  );
}
