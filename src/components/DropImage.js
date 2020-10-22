import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropImage = ({ setfileDetails }) => {
  const [uploadFile, setUploadFile] = useState();
  const [fileType, setfileType] = useState();
  const [imgURL, setimgURL] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadFile((prev) => {
      setfileType();
      return file;
    });
  }, []);

  useEffect(() => {
    if (uploadFile) {
      const [fileURL, _fileType] = getFileDetail(uploadFile);
      setimgURL(fileURL);
      setfileType(_fileType);
    }
  }, [uploadFile]);

  useEffect(() => {
    if (fileType) {
      console.log(fileType, uploadFile);
      setfileDetails([fileType, uploadFile]);
    }
  }, [fileType, setfileDetails, uploadFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="w-2/3 min-h-full py-4 mx-8 bg-gray-900 flex flex-col justify-center items-center rounded-lg cursor-pointer"
    >
      <input {...getInputProps()} />
      <div className="text-xl font-sans text-gray-500 px-2">
        {uploadFile ? (
          <div>
            <img src={imgURL} className="max-w-xs mx-auto" alt="uploadimage" />
            <div className="text-center text-lg">{uploadFile.name} </div>
          </div>
        ) : (
          <div>
            <span className="text-indigo-600 ">Select a file</span>{" "}
            <span>or drag and drop </span>
          </div>
        )}
      </div>
      {uploadFile && fileType === "unknown" ? (
        <div className="flex justify-center w-full mt-4 text-red-300">
          NOTE : This file type is not suppoted, try images or audio
        </div>
      ) : null}
    </div>
  );
};
export default DropImage;

const getFileDetail = (file) => {
  const extension = file.name.split(".").pop().toLowerCase();
  let fileURL = "";
  let _fileType = "";
  const imgType = ["png", "jpg", "jpeg"];
  // const pdfType = ["pdf"];
  const audioType = ["mp3", "wav"];

  if (imgType.includes(extension)) {
    fileURL = URL.createObjectURL(file);
    _fileType = "img";
  }
  // else if (pdfType.includes(extension)) {
  //   fileURL = "/pdf.png";
  //   _fileType = "pdf";
  // }
  else if (audioType.includes(extension)) {
    fileURL = "/audio.png";
    _fileType = "audio";
  } else {
    fileURL = "/unknown.png";
    _fileType = "unknown";
  }
  return [fileURL, _fileType];
};

// const Btn = React.forwardRef(({ children, ...props }, ref) => {
//   return (
//     <button
//       ref={ref}
//       {...props}
//       //    hover:border-transparent hover:text-white
//       className="bg-transparent mx-2 font-light py-2 px-4 border hover:bg-green-700 border-green-700 rounded bg-green-900 border-transparent text-white"
//     >
//       {children}
//     </button>
//   );
// });
