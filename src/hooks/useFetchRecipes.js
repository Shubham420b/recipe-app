import { useState } from "react";
import { rapidApiOptions } from "../utils/rapidapi";

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipes = async (searchText) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&q=${searchText}`,
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

  return { recipes, loading, error, getRecipes: fetchRecipes };
};
