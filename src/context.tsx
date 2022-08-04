import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextData = {
  loading: boolean;
  cocktails: [];
  setSearchTerm: Function;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState<[]>([]);

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
