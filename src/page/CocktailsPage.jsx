import { useState } from "react";

function CocktailsPage () {
    const [cocktails , setCocktails] = useState(null);

    if(!cocktails) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json.drinks)
            setCocktails(json.drinks)
        })
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