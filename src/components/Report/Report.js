import React from "react";
import FailedTests from "../FailedTests/FailedTests";

const Report = ({ detail, username }) => {
  const { time, sha, failedTests } = detail;
  return (
    <div className="report">
      <p>{`${username} | ${sha} | ${time}`}</p>
      <FailedTests failedTests={failedTests} />
    </div>
  );
};

export default Report;
