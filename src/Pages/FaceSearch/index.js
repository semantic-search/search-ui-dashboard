import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import ImageGrid from "../../components/ImageGrid";
import Pagination from "../../components/Pagination";
import { baseUrl } from "../../config.json";

const FaceSearch = () => {
  const [[fileType, uploadFile], setfileDetails] = useState([]);
  const [page, setPage] = useState(0);

  const [mutate, { isLoading, data }] = useMutation(({ uploadFile, page }) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    return fetch(baseUrl + `face-search/?skip=${page}`, {
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

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Face Search"} />
      <DropImage setfileDetails={setfileDetails} />
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {console.log(isLoading, "loading")}
      <ImageGrid data={data} />
      <Pagination tPages={data && data.total_pages} setPage={setPage} />
    </div>
  );
};

export default FaceSearch;
