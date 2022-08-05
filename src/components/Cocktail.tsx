import { Link } from "react-router-dom";

import { CocktailsFormatted } from "../@types/cocktail";

export function Cocktail({ id, name, image, info, glass }: CocktailsFormatted) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
