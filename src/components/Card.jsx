import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  const viewDesc = () => {
    navigate(`/${recipe.id}`);
  };

  return (
    <div className={styles.card_container} onClick={viewDesc}>
      <div className={styles.image_Container}>
        <img src={recipe.thumbnail_url} />
      </div>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default Card;
