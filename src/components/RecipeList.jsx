import { useState, useEffect } from "react";
import { rapidApiOptions } from "../utils/rapidapi";
import Card from "./Card";
import styles from "./RecipeList.module.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          "https://tasty.p.rapidapi.com/recipes/list?from=0&size=5",
          rapidApiOptions
        );

        const data = await res.json();
        console.log(data);

        setRecipes(data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
                <span className={styles.span}>Recipes: {recipe.recipes?.length ?? 0}</span>
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
