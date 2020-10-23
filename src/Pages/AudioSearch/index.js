import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import { audioUrl } from "../../config.json";
import ResultGrid from "./ResultGrid";

const AudioSearch = () => {
  const [[fileType, uploadFile], setfileDetails] = useState([]);

  const [mutate, { isLoading, data }] = useMutation(({ uploadFile }) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    return fetch(audioUrl + `find`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => JSON.parse(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    const searchImage = async () => {
      if (uploadFile) {
        await mutate({ uploadFile });
      }
    };
    searchImage();
  }, [uploadFile, fileType, mutate]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Audio Search"} />
      <DropImage setfileDetails={setfileDetails} />
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {console.log(isLoading, "loading", data)}
      {data?.data?.file_name && <ResultGrid data={data} />}
    </div>
  );
};

export default AudioSearch;
