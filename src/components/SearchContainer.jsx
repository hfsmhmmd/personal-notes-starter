import React, { useState } from "react";

function SearchContainer({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const collectQuery = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={collectQuery}>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchContainer;
