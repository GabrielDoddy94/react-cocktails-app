export type CocktailsData = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
};

export type Drinks = {
  drinks: CocktailsData[];
};

export type CocktailsFormatted = {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
};

export type SingleCocktailFormatted = {
  name: string;
  image: string;
  info: string;
  category: string;
  glass: string;
  instructions: string;
  ingredients: (string | null)[];
};
