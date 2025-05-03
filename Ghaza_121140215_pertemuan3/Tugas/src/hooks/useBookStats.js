import { useMemo } from "react";
import { useBooks } from "../context/BookContext";

export const useBookStats = () => {
  const { books } = useBooks();

  return useMemo(() => {
    let own = 0, reading = 0, wishlist = 0;

    for (const b of books) {
      if (b.status === "Own") own++;
      else if (b.status === "Reading") reading++;
      else if (b.status === "Wishlist") wishlist++;
    }

    return {
      total: books.length,
      own,
      reading,
      wishlist,
    };
  }, [books]);
};
