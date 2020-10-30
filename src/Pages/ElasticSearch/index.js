import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import ImageGrid from "../../components/ImageGrid";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { elasticUrl } from "../../config.json";
import Results from "./Results";

const ElasticSearch = () => {
  //   const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const [mutate, { isLoading, isError, isSuccess, data, error }] = useMutation(
    ({ searchTerm }) => {
      return fetch(elasticUrl + `elasticsearch/${searchTerm}`)
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
      <Heading title={"ElasticSearch Search"} />
      <Search setSearchTerm={setSearchTerm} />
      <Results data={data} />
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {console.log(isLoading, "loading")}
      {/* <ImageGrid data={data} /> */}
      {/* <Pagination tPages={data && data.total_pages} setPage={setPage} /> */}
    </div>
  );
};

export default ElasticSearch;
