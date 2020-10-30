import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import ImageGrid from "../../components/ImageGrid";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { typesense } from "../../config.json";
import Results from "./Results";

const Typesense = () => {
  //   const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const [mutate, { isLoading, isError, isSuccess, data, error }] = useMutation(
    ({ searchTerm }) => {
      return fetch(typesense + `typesense/${searchTerm}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  );
  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm) {
      mutate({ searchTerm });
    }
  }, [mutate, searchTerm]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Typesense Search"} />
      <Search setSearchTerm={setSearchTerm} />
      {isError && <div className="text-red-500"> ERROR </div>}
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      <Results data={data}/>
      {/* <Pagination tPages={data && data.total_pages} setPage={setPage} /> */}
    </div>
  );
};

export default Typesense;
