import { useState } from "react";
import { rapidApiOptions } from "../utils/rapidapi";

export const useRecipeDesc = () => {
  const [recipeDesc, setRecipeDesc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDesc = async (recipeId) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`,
        rapidApiOptions
      );

      const data = await res.json();
      console.log(data);

      setRecipeDesc(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  return { recipeDesc, loading, error, getRecipeDesc: fetchDesc };
};
