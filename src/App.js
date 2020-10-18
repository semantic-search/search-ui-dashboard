import React from "react";
import ImageGrid from "./ImageGrid";
import DropImage from "./DropImage";
import SearchInput from "./SearchInput";

function App() {
  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <SearchInput/>
      <DropImage />
      <ImageGrid />
    </div>
  );
}

export default App;
