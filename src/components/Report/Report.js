import React from "react";
import FailedTests from "../FailedTests/FailedTests";

const Report = ({ detail, username }) => {
  return (
    <div className="report">
      <p>{`${username} | ${detail.sha} | ${detail.time}`}</p>
      <FailedTests detail={detail} />
    </div>
  );
};

export default Report;
