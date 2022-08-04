import { useGlobalContext } from "../context";
import { Cocktail } from "./Cocktail";
import { Loading } from "./Loading";

export function CocktailList() {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
}
