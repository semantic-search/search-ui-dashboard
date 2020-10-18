import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropImage = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [imgURL, setimgURL] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    setUploadFile(file);
    console.log();
    setimgURL(getFileURL(file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-2/3 min-h-full py-5 m-8 bg-gray-900 flex justify-center items-center rounded-lg cursor-pointer"
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
            <span>or drag and drop to search it !!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropImage;

const getFileURL = (file) => {
  const extension = file.name.split(".").pop();
  const imgType = ["png", "jpg", "jpeg"];
  const pdfType = ["pdf"];
  const audioType = ["mp3", "wav"];

  if (imgType.includes(extension)) {
    return URL.createObjectURL(file);
  } else if (pdfType.includes(extension)) {
    return "/pdf.png";
  } else if (audioType.includes(extension)) {
    return "/audio.png";
  } else {
    return "/unknown.png";
  }
};
