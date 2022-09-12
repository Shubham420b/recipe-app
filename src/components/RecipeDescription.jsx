import styles from "./RecipeDescription.module.css";
import { useParams } from "react-router-dom";
import { useRecipeDesc } from "../hooks/useRecipeDesc";
import { useEffect } from "react";

const RecipeDescription = () => {
  const { recipeId } = useParams();
  const { recipeDesc, loading, error, getRecipeDesc } = useRecipeDesc();

  useEffect(() => {
    getRecipeDesc(recipeId);
  }, [recipeId]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Somthing went wrong!!! Try again Later</p>
      </div>
    );
  }

  if (!recipeDesc) {
    return (
      <div>
        <p>No recipe data!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.imageConatiner}>
          <img src={recipeDesc.thumbnail_url} />
        </div>
        <div className={styles.summaryContainer}>
          <h1>{recipeDesc.name}</h1>
          <span>Servings: {recipeDesc.num_servings}</span>
          <p>
            <strong>Description</strong>: {recipeDesc.description}
          </p>
          <div className={styles.tags}>
            {recipeDesc.tags.map((tag) => {
              return <span key={tag.id}>{tag.display_name}</span>;
            })}
          </div>
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>Cooking Instructions</h2>
        {recipeDesc.instructions.map((instruction) => {
          return <p key={instruction.id}>{instruction.display_text}</p>;
        })}
      </div>
    </div>
  );
};

export default RecipeDescription;
