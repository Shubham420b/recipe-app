import { useEffect, useContext } from "react";
import SearchContext from "../context/searchContext";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import Card from "./Card";
import styles from "./RecipeList.module.css";

const RecipeList = () => {
  const { recipes, loading, error, getRecipes } = useFetchRecipes();
  const { searchText } = useContext(SearchContext)

  useEffect(() => {
    getRecipes(searchText);
  }, [searchText]);

  return (
    <div className={styles.container}>
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {!loading &&
        !error &&
        recipes.map((recipe) => {
          if (recipe.recipes?.length) {
            return (
              <div key={recipe.id} className={styles.main}>
                <h1>{recipe.name}</h1>
                <span className={styles.span}>
                  Recipes: {recipe.recipes?.length ?? 0}
                </span>
                <div className={styles.recipe_Card_List}>
                  {recipe.recipes?.map((item) => {
                    return <Card key={item.id} recipe={item} />;
                  })}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default RecipeList;
