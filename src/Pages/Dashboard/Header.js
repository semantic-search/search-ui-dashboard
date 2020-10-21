import React from "react";
import { RiDashboardLine } from "react-icons/ri";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <RiDashboardLine />
      <span
        style={{
          fontWeight: "300",
          marginLeft: "0.5rem",
        }}
      >
        Semantic Search Dashboard
      </span>
    </div>
  );
};

export default Header;
