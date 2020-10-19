import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../components/DropImage";
import ImageGrid from "../components/ImageGrid";
import Search from "../components/Search";
import { baseUrl } from "../config.json";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMode, setsearchMode] = useState(["ts"]);
  const [[fileType, uploadFile], setfileDetails] = useState([]);
  const [page, setPage] = useState(0);

  const [
    mutate,
    { isIdle, isLoading, isError, isSuccess, data, error },
  ] = useMutation(({ uploadFile, page }) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    return fetch(baseUrl + `search/?skip=${page}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    const searchImage = async () => {
      if (uploadFile) {
        await mutate({ uploadFile, page });
      }
    };
    searchImage();
  }, [uploadFile, fileType, mutate, page]);
  {
    console.log(data && data.files[0], "sss");
  }
  useEffect(() => {
    console.log(searchMode, searchTerm);
  }, [searchMode, searchTerm]);
  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Search setsearchMode={setsearchMode} setSearchTerm={setSearchTerm} />
      <DropImage setfileDetails={setfileDetails} />
      <ImageGrid />
    </div>
  );
};

export default HomePage;
