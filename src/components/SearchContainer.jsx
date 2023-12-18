import React, { useState } from "react";

function SearchContainer({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const collectQuery = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="mt-2">
      <form onSubmit={collectQuery}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-32"
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchContainer;
