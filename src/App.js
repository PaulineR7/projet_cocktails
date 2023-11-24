import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './page/CocktailsPage';
import CocktailRandomPage from "./page/CocktailRandomPage";
import CategoriesPage from "./page/CategoriesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/randomcocktail" element={<CocktailRandomPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
