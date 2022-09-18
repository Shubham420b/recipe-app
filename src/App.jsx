import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { SearchContextProvider } from "./context/searchContext";
import { Routes, Route } from "react-router-dom";
import RecipeDescription from "./components/RecipeDescription";
import { BookmarkContextProvider } from "./context/bookmarkContext";

function App() {
  return (
    <BookmarkContextProvider>
      <SearchContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/:recipeId" element={<RecipeDescription />} />
        </Routes>
      </SearchContextProvider>
    </BookmarkContextProvider>
  );
}

export default App;
