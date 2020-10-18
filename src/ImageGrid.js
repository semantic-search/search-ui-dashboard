import React from "react";

const ImageGrid = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3  max-w-5xl pb-4 mx-4">
      <Image />
      <Image />
    </div>
  );
};

export default ImageGrid;

export const Image = () => {
  return (
    <div className="">
      <img
        className="object-cover"
        src="https://via.placeholder.com/600"
        alt="temp"
      />
      <div className="text-indigo-700 text-lg font-sans bg-gray-900 p-2 font-semibold">
        File name
      </div>
    </div>
  );
};
