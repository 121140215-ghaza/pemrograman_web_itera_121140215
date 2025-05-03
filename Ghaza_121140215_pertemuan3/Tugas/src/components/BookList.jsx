import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import PropTypes from "prop-types";
import { Edit, Trash2 } from "lucide-react";

const statusStyle = {
  Own: "bg-secondary text-secondary-foreground",
  Reading: "bg-primary text-primary-foreground",
  Wishlist: "bg-accent text-accent-foreground",
};

export const BookList = ({ books, onEdit, onDelete }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {books.map((b) => (
      <Card
        key={b.id}
        className="flex flex-col justify-between border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
      >
        <CardContent className="space-y-3 pt-5">
          <h3 className="text-lg font-semibold">{b.title}</h3>
          <p className="text-sm text-muted-foreground">{b.author}</p>

          <span
            className={`text-xs font-medium px-3 py-1 rounded-full inline-block w-fit ${statusStyle[b.status]}`}
          >
            {b.status}
          </span>
        </CardContent>

        <div className="flex justify-between items-center gap-2 p-4 pt-2">
          <Tooltip content="Edit">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => onEdit(b)}
            >
              <Edit size={16} /> Edit
            </Button>
          </Tooltip>

          <Tooltip content="Delete">
            <Button
              size="sm"
              variant="destructive"
              className="flex items-center gap-1"
              onClick={() => onDelete(b.id)}
            >
              <Trash2 size={16} /> Delete
            </Button>
          </Tooltip>
        </div>
      </Card>
    ))}
  </div>
);
