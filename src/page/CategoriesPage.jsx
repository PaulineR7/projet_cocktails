import { useEffect, useState } from "react";

function CategoriesPage() {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const categoriesFetch = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const categoriesJs = await categoriesFetch.json()
            console.log(categoriesJs)
            setCategories(categoriesJs.drinks)
        }) ()
    }, []);

    return(
       <main>
        {categories ? 
        <article>
            {categories.map((categorie) => {
                return (
                    <p>Catégories : {categorie.strCategory}</p>
                )
            })}    
        </article> 
        : 
        <p>Catégories en cours</p>}
       </main>
    )
}

export default CategoriesPage;