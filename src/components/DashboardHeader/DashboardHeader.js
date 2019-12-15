import React from "react";

const DashboardHeader = ({ headings }) => {
  return (
    <tr>
      {headings.map(heading => (
        <th>{heading}</th>
      ))}
    </tr>
  );
};

export default DashboardHeader;
