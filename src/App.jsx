import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { SearchContextProvider } from "./context/searchContext";

function App() {
  return (
    <SearchContextProvider>
      <Header />
      <RecipeList />
    </SearchContextProvider>
  );
}

export default App;
