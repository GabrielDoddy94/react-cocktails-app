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

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext({});

export function AppProvider({ children }: AppProviderProps) {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
}
// make sure use
export function useGlobalContext() {
  return useContext(AppContext);
}
