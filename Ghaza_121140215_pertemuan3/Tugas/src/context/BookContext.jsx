import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((b) => (b.id === action.payload.id ? action.payload : b));
    case "REMOVE":
      return state.filter((b) => b.id !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [persisted, setPersisted] = useLocalStorage("books", []);
  const [books, dispatch] = useReducer(reducer, persisted);

  useEffect(() => {
    setPersisted(books);
  }, [books]);

  const value = React.useMemo(() => ({ books, dispatch }), [books]);

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used within a BookProvider");
  return context;
};
