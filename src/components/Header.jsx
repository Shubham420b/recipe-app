import { useContext, useRef } from "react";
import SearchContext from "../context/searchContext";
import styles from "./Header.module.css";

const Header = () => {
  const inputRef = useRef(null);
  const { setSearchText } = useContext(SearchContext);

  const searchRecipe = (e) => {
    if (e.key === "Enter") {
      console.log(inputRef.current.value); // inputRef.current is target
      if (inputRef.current.value && inputRef.current.value.length >= 3) {
        setSearchText(inputRef.current.value);
      }
    }
  };

  return (
    <header className={styles.header}>
      <h1>Recipe Application</h1>
      <div className={styles.searchBox}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Recipes"
          onKeyDown={searchRecipe}
        />
      </div>
    </header>
  );
};

export default Header;
