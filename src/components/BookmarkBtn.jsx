import styles from "./BookmarkBtn.module.css";
import { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";

const BookmarkBtn = () => {
  const { bookmarkedItems } = useContext(BookmarkContext);

  return (
    <div className={styles.bookmark}>
      <span>⭐</span>
      {bookmarkedItems.length > 0 && <p>{bookmarkedItems.length}</p>}
    </div>
  );
};

export default BookmarkBtn;
