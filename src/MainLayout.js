import React, { useState } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export const MainLayout = ({ component: Component, ...rest }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const onCloseHandler = () => setToggleSidebar(!toggleSidebar);
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <div
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className="absolute top-0 left-0 text-gray-300 text-xl pl-3 cursor-pointer"
          >
            <GiHamburgerMenu className="mt-2 mx-2" />
          </div>
          <div
            className={`${handleSidebar(
              toggleSidebar
            )} absolute w-64  top-0 h-screen shadow-md bg-gray-900 z-50 transition-all duration-200 ease-out`}
          >
            <Sidebar onClose={() => onCloseHandler()} />
          </div>
          <div
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className={`absolute opacity-25 inset-0 ${
              toggleSidebar ? "block" : "hidden"
            } `}
          ></div>
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

const handleSidebar = (state) => {
  return state ? "left-0" : "-left-1/1";
};
