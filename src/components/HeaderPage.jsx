import React from "react";
import SearchContainer from "./SearchContainer";
function HeaderPage({ onSearch }) {
  return (
    <div className="flex flex-row  justify-around  py-2 px-4 bg-white ">
      <h1 className="text-4xl">Notes</h1>

      <SearchContainer onSearch={onSearch} />
    </div>
  );
}

export default HeaderPage;
