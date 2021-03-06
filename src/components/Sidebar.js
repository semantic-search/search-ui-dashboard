import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteName } from "../Routes";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Sidebar = ({ onClose }) => {
  const onCloseHandle = () => {
    onClose();
  };
  return (
    <div className="text-gray-300 ">
      <div
        className=" cursor-pointer px-3 py-3"
        onClick={() => onCloseHandle()}
      >
        <AiOutlineCloseCircle className="text-2xl" />
      </div>
      <Element route={RouteName.dashboard}>Dashboard</Element>
      <Element route={RouteName.imageSearch}>Image Search</Element>
      <Element route={RouteName.faceSearch}>Face Search</Element>
      <Element route={RouteName.registerFace}>Register Face</Element>
      <Element route={RouteName.personSearch}>Person Search</Element>
      <Element route={RouteName.audioSearch}>Audio Search</Element>
      <Element route={RouteName.typesense}>Text Search Typesense</Element>
      <Element route={RouteName.elasticsearch}>
        Text Search Elasticsearch
      </Element>
      <Element route={RouteName.indexFile}>Index File</Element>
      <Element route={RouteName.webIndex}>Index Websites</Element>
    </div>
  );
};

export default Sidebar;

const Element = ({ children, route }) => {
  const { pathname } = useLocation();
  const selected = pathname === route;
  return (
    <Link to={route}>
      <div
        className={`mx-4 my-4 px-2 py-4 text-center font-semibold rounded-2xl ${
          selected ? "bg-indigo-900" : null
        } border border-indigo-700`}
      >
        {children}
      </div>
    </Link>
  );
};
