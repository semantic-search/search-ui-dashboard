import React from "react";
import _ from "lodash";
import TableSection from "./TableSection";

function TableParent(props) {
  const { Title, SectionData } = props;
  return (
    <div
      style={{
        marginLeft: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <span
          role="img"
          aria-label="dot"
          style={{
            paddingRight: "1rem",
          }}
        >
          ⚫
        </span>
        <h3
          style={{
            textDecoration: "underline",
            marginBlockEnd: 0,
          }}
        >
          {Title}
        </h3>
      </div>

      <div>
        {_.map(SectionData, (value, key) => {
          return <TableSection key={key} Title={key} TData={value} />;
        })}
      </div>
    </div>
  );
}
export default TableParent;
