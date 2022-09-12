import styles from "./Card.module.css";

const Card = ({ recipe }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_Container}>
        <img src={recipe.thumbnail_url} />
      </div>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default Card;
