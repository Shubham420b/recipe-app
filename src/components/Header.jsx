import { useContext, useRef } from "react";
import SearchContext from "../context/searchContext";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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

  const home = () => {
    navigate(`/`);
  };

  return (
    <header className={styles.header}>
      <h1 onClick={home}>Recipe Application</h1>
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
