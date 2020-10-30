import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import Heading from "../../components/Heading";
import ImageGrid from "../../components/ImageGrid";
import Search from "../../components/Search";
import { personSearchUrl } from "../../config.json";

const PersonSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [mutate, { isLoading, data }] = useMutation(({ searchTerm }) => {
    const formData = new FormData();
    formData.append("user_name", searchTerm);
    return fetch(personSearchUrl + `person_search`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  const personSearch = useCallback(() => {
    if (searchTerm) {
      mutate({ searchTerm });
    }
  }, [mutate, searchTerm]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Person Search"} />
      <Search setSearchTerm={setSearchTerm} />
      <div className="flex justify-start items-end w-2/3 flex-wrap my-6">
        <button
          onClick={personSearch}
          type="submit"
          className="ml-2 px-4 py-2 bg-green-900 text-gray-300 font-semibold rounded-lg "
        >
          Find
        </button>
      </div>
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      <ImageGrid data={data} />
    </div>
  );
};

export default PersonSearch;
