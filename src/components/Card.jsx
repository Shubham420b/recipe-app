import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import StarSVG from "../assets/Star";
import BookmarkContext from "../context/bookmarkContext";
import { useContext } from "react";

const Card = ({ recipe }) => {
  const { addItem, removeItem, isBookmarked } = useContext(BookmarkContext);
  const marked = isBookmarked(recipe.id);

  const navigate = useNavigate();

  const viewDesc = () => {
    navigate(`/${recipe.id}`);
  };

  const handleBookmark = (event) => {
    event.stopPropagation();
    if (marked) {
      removeItem(recipe.id);
    } else {
      addItem({
        id: recipe.id,
        name: recipe.name,
        thumbnail_url: recipe.thumbnail_url,
      });
    }
  };

  return (
    <div className={styles.card_container} onClick={viewDesc}>
      <span onClick={handleBookmark}>
        <StarSVG checked={marked} />
      </span>
      <div className={styles.image_Container}>
        <img src={recipe.thumbnail_url} />
      </div>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default Card;
