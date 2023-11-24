import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './page/CocktailsPage';
import CocktailRandomPage from "./page/CocktailRandomPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/randomcocktail" element={<CocktailRandomPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
