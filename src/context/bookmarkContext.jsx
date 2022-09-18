import { createContext, useState } from "react";

const BookmarkContext = createContext({
  bookmarkedItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearAll: () => {},
  isBookmarked: () => {},
});

export const BookmarkContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const context = {
    bookmarkedItems: items,
    addItem: (item) => {
      setItems((prev) => {
        return [item, ...prev];
      });
    },
    removeItem: (id) => {
      setItems((prev) => {
        return prev.filter((el) => el.id !== id);
      });
    },
    clearAll: () => {
      setItems([]);
    },
    isBookmarked: (id) => {
      let bookmarked = false;
      for (let el of items) {
        if (el.id === id) {
          bookmarked = true;
          break;
        }
      }
      return bookmarked;
    },
  };

  return (
    <BookmarkContext.Provider value={context}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
