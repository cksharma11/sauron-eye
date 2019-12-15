import React from "react";
import Report from "../Report/Report";

const Reports = ({ details, username }) => {
  return (
    <div className="details">
      {details.map(detail => {
        return <Report detail={detail} username={username} key={detail}/>;
      })}
    </div>
  );
};

export default Reports;
