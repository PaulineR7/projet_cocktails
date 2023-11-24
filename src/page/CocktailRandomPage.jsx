import { useState } from "react";

function CocktailRandomPage () {
    const [cocktailRandom, setCocktailRandom] = useState (null);
    if (!cocktailRandom) {
    (async () => {

        const cocktailRandomApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const cocktailRandomJs = await cocktailRandomApi.json()
        setCocktailRandom(cocktailRandomJs.drinks[0])
    })(); 
}
   
    return(
        <main>
            {cocktailRandom ? <h2>{cocktailRandom.strDrink}</h2>
            :
            <p>Cocktail en chargement</p>}
        </main>
        

    )
}

export default CocktailRandomPage;