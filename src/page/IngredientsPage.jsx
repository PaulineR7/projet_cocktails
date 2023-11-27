import { useEffect, useState } from "react";

function IngredientsPage () {

    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsFetch = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientsJs = await ingredientsFetch.json();
    
            setIngredients(ingredientsJs.drinks)
        }) ();
    }, [])
   
    
    return (
        <main>
            {ingredients ? (
                <article>
                    {ingredients.map((ingredient) => {
                        return(
                            <p>{ingredient.strIngredient1}</p>
                        )
                    })}
                </article> 
            ) : (
                <p>Pas d'ingredient</p>
            )
            }
        </main>
    )
}

export default IngredientsPage;