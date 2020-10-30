import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import Heading from "../../components/Heading";
import ImageGrid from "../../components/ImageGrid";
import { indexURL } from "../../config.json";

const WebIndexing = () => {
  const [websites, setwebsites] = useState("");

  const [mutate, { isLoading, data }] = useMutation(({ websites }) => {
    const formData = new FormData();
    formData.append("urls", websites);
    return fetch(indexURL + `index/websites/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  const personSearch = useCallback(() => {
    if (websites) {
      mutate({ websites });
    }
  }, [mutate, websites]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Index Websites"} />
      <div className="flex justify-start items-end w-2/3 flex-wrap my-6">
        <label htmlFor="name" className="font-sans text-2xl text-gray-500 mr-2">
          Web Links:
        </label>
        <textarea
          value={websites}
          onChange={(e) => setwebsites(e.target.value)}
          id="name"
          className="appearance-none border rounded py-1 px-3 text-gray-900 bg-gray-400 w-full font-medium"
        />
      </div>
      <div className="flex justify-start items-end w-2/3 flex-wrap">
        <button
          onClick={personSearch}
          type="submit"
          className="px-4 py-2 bg-green-900 text-gray-300 font-semibold rounded-lg "
        >
          Index
        </button>
      </div>
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {data && data === true && <div className="text-green-500"> Done</div>}
    </div>
  );
};

export default WebIndexing;
