import React from "react";

const Sidebar = () => {
  return (
    <div className="text-gray-300 bg-gray-800 ">
      <div className="p-2 text-lg"> X </div>
      <Element> Link 1</Element>
    </div>
  );
};

export default Sidebar;

const Element = ({ children }) => {
  return <div className="bg-gray-700 px-10 py-4 text-xl ">{children}</div>;
};
