import React, { useEffect, useState } from "react";

const SearchBtns = ({ setsearchMode }) => {
  const [FsearchMode, setFsearchMode] = useState(["ts"]);
  useEffect(() => {
    setsearchMode(FsearchMode);
  }, [FsearchMode, setsearchMode]);
  return (
    <div className="pt-2">
      <Btn
        onClick={() => {
          FsearchMode.includes("ts")
            ? setFsearchMode((prevState) => prevState.filter((e) => e !== "ts"))
            : setFsearchMode([...FsearchMode, "ts"]);
        }}
        selected={FsearchMode.includes("ts")}
      >
        Typesense
      </Btn>
      <Btn
        onClick={() => {
          FsearchMode.includes("es")
            ? setFsearchMode((prevState) => prevState.filter((e) => e !== "es"))
            : setFsearchMode([...FsearchMode, "es"]);
        }}
        selected={FsearchMode.includes("es")}
      >
        ElasticSearch
      </Btn>
    </div>
  );
};

export default SearchBtns;

const Btn = ({ children, selected, ...props }) => {
  const selectedStyle = "bg-indigo-500 border-transparent text-white";
  return (
    <button
      {...props}
      //   hover:bg-indigo-500 hover:border-transparent hover:text-white
      className={`bg-transparent mx-2 font-semibold py-2 px-4 border border-indigo-500  rounded ${
        !selected && "text-indigo-700"
      } ${selected && selectedStyle}`}
    >
      {children}
    </button>
  );
};
