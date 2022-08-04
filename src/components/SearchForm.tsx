import { useGlobalContext } from "../context";

export function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
}
