import { Link } from "react-router-dom";
import { useState } from "react";

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
                        <article>
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} alt="" />
                            <Link to={`/detailpage/${cocktail.idDrink}`}>Voir plus de détails</Link>
                        </article>
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