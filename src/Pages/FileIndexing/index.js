import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import { indexFile } from "../../config.json";

const FileIndexing = () => {
  const [[fileType, uploadFile], setfileDetails] = useState([]);

  const [mutate, { isLoading, data }] = useMutation(({ uploadFile }) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    return fetch(indexFile + `index/file`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
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
      <Heading title={"Index File"} />
      <DropImage setfileDetails={setfileDetails} />
      {isLoading && <div className="text-gray-400"> INDEXING.........</div>}
      {data && data === true && <div className="text-green-500"> Done</div>}
      {console.log(isLoading, "loading")}
    </div>
  );
};

export default FileIndexing;
