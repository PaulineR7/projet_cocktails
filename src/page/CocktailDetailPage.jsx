import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetailPage () {

    const { id } = useParams();
    const [cocktails , setCocktail] = useState(null);

    useEffect(() => {
        (async () => {
            const apiCocktail = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
            const apiCocktailJs = await apiCocktail.json();
            console.log(apiCocktailJs)
            setCocktail(apiCocktailJs.drinks)
        })();
    }, []);
    

    return(
        <main>
            {cocktails ? (
                <>
                {cocktails.map((cocktail) => {
                    return(
                        <article>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt="" />
                        <p>Catégorie : {cocktail.strCategory}</p>
                        <p>Instructions : {cocktail.strInstructions}</p>
                    </article>
                    )  
                })}
                </>
                ) : (
                    <p>Pas de cocktails</p>
                ) }
        </main>
    )
}

export default CocktailDetailPage;