import { useState } from "react";

function CocktailRandomPage () {
    const [cocktailRandom, setCocktailRandom] = useState (null); // je met une valeur "null" à  l'useState "cocktailRandom"


    if (!cocktailRandom) {
    (async () => {

        const cocktailRandomApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php") // je fais appel a un serveur qui a une base de données
        const cocktailRandomJs = await cocktailRandomApi.json() // je convertie le json en JS
        setCocktailRandom(cocktailRandomJs.drinks[0]) // je modifie la valeur d'useState "cocktailRandom" 
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