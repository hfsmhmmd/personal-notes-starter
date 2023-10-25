import React from "react";
import SearchContainer from "./SearchContainer";
function HeaderPage({ onSearch }) {
  // const onSearch = (keyw) => {
  //   console.log("keys", keyw);
  // };
  return (
    <div className="flex flex-row justify-between p-2 bg-white ">
      <h1 className="text-4xl">Notes</h1>
      <SearchContainer onSearch={onSearch} />
    </div>
  );
}

export default HeaderPage;
