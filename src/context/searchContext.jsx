import { createContext, useState } from "react";

const SearchContext = createContext({
    searchText: '',
    setSearchText: () => {}
});

export const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const context = {
    searchText,
    setSearchText,
  };

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
