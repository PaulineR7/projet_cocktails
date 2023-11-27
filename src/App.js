import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './page/CocktailsPage';
import CocktailRandomPage from "./page/CocktailRandomPage";
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";
import CocktailDetailPage from "./page/CocktailDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/randomcocktail" element={<CocktailRandomPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/detailpage/:id" element={<CocktailDetailPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
