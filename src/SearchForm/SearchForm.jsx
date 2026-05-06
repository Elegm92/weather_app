import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar ciudad..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;