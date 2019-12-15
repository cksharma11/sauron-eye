import React from "react";

const DashboardHeader = ({ headings }) => {
  return (
    <tr>
      {headings.map(heading => (
        <th key={heading}>{heading}</th>
      ))}
    </tr>
  );
};

export default DashboardHeader;
