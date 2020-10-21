import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../components/DropImage";
import ImageGrid from "../components/ImageGrid";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { baseUrl } from "../config.json";

const HomePage = React.forwardRef(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMode, setsearchMode] = useState(["ts"]);
  const [[fileType, uploadFile], setfileDetails] = useState([]);
  const [page, setPage] = useState();
  const [superStateRef, setsuperStateRef] = useState();

  const [
    imgSearchAPI,
    { isIdle, isLoading, isError, isSuccess, data, error },
  ] = useMutation(({ fileToUpload, pageNo }) => {
    const formData = new FormData();
    formData.append("file", fileToUpload);
    return fetch(baseUrl + `search/?skip=${pageNo}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  const call_imgSearchAPI = useCallback(() => {
    if (uploadFile && fileType === "img") {
      imgSearchAPI({ fileToUpload: uploadFile, pageNo: page });
    }
  }, [fileType, imgSearchAPI, page, uploadFile]);

  useEffect(() => {
    if (superStateRef) {
      superStateRef.current.click();
    }
  }, [page, superStateRef]);

  // useEffect(() => {
  //   if (pageCall) {
  //     call_imgSearchAPI();
  //     console.log("API CALLED IMG SEARCH");
  //   }
  // }, [call_imgSearchAPI, page, pageCall]);

  useEffect(() => {
    console.log(searchMode, searchTerm);
  }, [searchMode, searchTerm]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Search setsearchMode={setsearchMode} setSearchTerm={setSearchTerm} />
      <DropImage
        setfileDetails={setfileDetails}
        call_imgSearchAPI={call_imgSearchAPI}
        page={page}
        // superRef={superRef}
        setsuperStateRef={setsuperStateRef}
      />
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {console.log(isLoading, "loading")}
      <ImageGrid data={data} />
      <Pagination
        tPages={data && data.total_pages}
        superStateRef={superStateRef}
        setPage={setPage}
      />
    </div>
  );
});

export default HomePage;
