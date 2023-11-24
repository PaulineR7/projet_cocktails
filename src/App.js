import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './page/CocktailsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
