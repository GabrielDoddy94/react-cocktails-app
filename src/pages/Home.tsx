import { SearchForm } from "../components/SearchForm";
import { CocktailList } from "../components/CocktailList";

export function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
