import { Link } from "react-router-dom";
import { useState } from "react";
import CocktailCard from "../components/CocktailCard";

function CocktailsPage () {
    const [cocktails , setCocktails] = useState(null);

    if(!cocktails) {

        (async () => {
        const fetchCoktails = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        const jsonCocktails = await fetchCoktails.json()
        setCocktails(jsonCocktails.drinks)
        })();
        
    }

    return(
        <main>
            {cocktails ? (
                <>
                {cocktails.map((cocktail) => {
                    return (
                       <CocktailCard cocktailToDisplay={cocktail}/>
                    )
                })}
                </>
            ) : (
                <p>Cocktails en cours de chargement</p>
            )}
        </main>
    )
}

export default CocktailsPage;