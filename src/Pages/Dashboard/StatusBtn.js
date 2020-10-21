import React from "react";

const StatusBtn = ({ status }) => {
  return (
    <div className={`StatusBtn ${status === "Open" && "Green"}`}>{status}</div>
  );
};

export default StatusBtn;
