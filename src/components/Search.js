import React from "react";
import SearchBtns from "./SearchBtns";
import SearchInput from "./SearchInput";

const Search = (props) => {
  return (
    <div className="w-2/3 mt-8 flex flex-wrap justify-start">
      <SearchBtns {...props} /> <SearchInput {...props} />
    </div>
  );
};

export default Search;
