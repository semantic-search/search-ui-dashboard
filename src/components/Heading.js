import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="font-semibold text-3xl text-gray-500 w-2/3 min-h-full py-4 mx-8 mt-8 mb-2 flex justify-start items-center">
      {title}
    </div>
  );
};

export default Heading;
