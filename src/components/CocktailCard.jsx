import { Link } from "react-router-dom";

function CocktailCard({cocktailToDisplay}) {
    return(
        <article>
        <h2>{cocktailToDisplay.strDrink}</h2>
        <img src={cocktailToDisplay.strDrinkThumb} alt="" />
        <Link to={`/detailpage/${cocktailToDisplay.idDrink}`}>Voir plus de détails</Link>
    </article>
    )
}

export default CocktailCard;