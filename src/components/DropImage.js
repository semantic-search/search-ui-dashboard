import { fireEvent } from "@testing-library/react";
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

const getFileDetail = (file) => {
  const extension = file.name.split(".").pop();
  let fileURL = "";
  let _fileType = "";
  const imgType = ["png", "jpg", "jpeg"];
  const pdfType = ["pdf"];
  const audioType = ["mp3", "wav"];

  if (imgType.includes(extension)) {
    fileURL = URL.createObjectURL(file);
    _fileType = "img";
  } else if (pdfType.includes(extension)) {
    fileURL = "/pdf.png";
    _fileType = "pdf";
  } else if (audioType.includes(extension)) {
    fileURL = "/audio.png";
    _fileType = "audio";
  } else {
    fileURL = "/unknown.png";
    _fileType = "unknown";
  }
  return [fileURL, _fileType];
};
