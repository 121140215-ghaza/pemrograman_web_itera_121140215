import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
  const readValue = () => {
    if (typeof window === "undefined") return initial;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch {
      return initial;
    }
  };

  const [stored, setStored] = useState(readValue);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(stored) : value;
      setStored(valueToStore);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handler = () => {
      setStored(readValue());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return [stored, setValue];
};
