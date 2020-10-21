import React from "react";
import Sidebar from "../components/Sidebar";
import HomePage from "./HomePage";

export const MainLayout = () => {
  return (
    <div>
      <div className="absolute -left-100 top-0 left-0 h-screen shadow-md bg-indigo-900">
        <Sidebar />
      </div>
      <HomePage />
    </div>
  );
};
