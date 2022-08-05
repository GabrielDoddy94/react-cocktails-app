import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

import { CocktailsFormatted, Drinks } from "./@types/cocktail";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextData = {
  loading: boolean;
  cocktails: CocktailsFormatted[];
  setSearchTerm: Function;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState<CocktailsFormatted[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data: Drinks = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export function useGlobalContext() {
  return useContext(AppContext);
}
