import React from "react";
import FailedTests from "../FailedTests/FailedTests";

const Report = ({ detail, username }) => {
  const { time, sha, failedSuites } = detail;
  return (
    <div className="report">
      <p>{`${username} | ${sha} | ${time}`}</p>
      <FailedTests failedSuites={failedSuites} />
    </div>
  );
};

export default Report;
