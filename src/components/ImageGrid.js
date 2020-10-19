import React from "react";

const ImageGrid = ({ data }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3  max-w-5xl pb-4 mx-4 mb-10">
      {data &&
        data.files[0] &&
        data.files.map((elem, idx) => {
          return (
            <Image
              name={data.document[idx]}
              src={`data:image/png;base64, ${elem}`}
              score={data.scores[idx]}
            />
          );
        })}
    </div>
  );
};

export default ImageGrid;

export const Image = ({ src, name, score }) => {
  return (
    <div className="">
      <img className="object-cover" src={src} alt={name} />
      <div className="text-indigo-700 break-words text-lg font-sans bg-gray-900 p-2 font-semibold">
        Name: {name}
      </div>
      <div className="text-indigo-700 text-lg font-sans bg-gray-900 px-2 pb-2 font-semibold">
        Score: {String(score).slice(0, 6)}
      </div>
    </div>
  );
};
