import React from "react";
import { Link } from "react-router-dom";

const ResultGrid = ({ data }) => {
  const file_name = data?.data?.file_name;
  const file_id = data?.data?.file_id;
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-8 max-w-5xl pb-4 mx-4 mb-10">
      <a href={`/${file_id}`} target="_blank" rel="noopener noreferrer">
        <Image name={file_name} src="/audio.png" />
      </a>
    </div>
  );
};

export default ResultGrid;

export const Image = ({ src, name, score }) => {
  return (
    <div className="">
      <img className="object-cover" src={src} alt={name} />
      <div className="text-indigo-700 break-words text-lg font-sans bg-gray-900 p-2 font-semibold">
        Name: {name}
      </div>
    </div>
  );
};
