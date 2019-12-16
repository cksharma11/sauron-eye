import React from "react";
import FailedTests from "../FailedTests/FailedTests";
import { getTimeDifference } from "../../helpers/helpers";

const Report = ({ detail, username }) => {
  const { time, sha, failedSuites } = detail;

  const currentTime = new Date().getTime();
  const pushTime = new Date(time).getTime();

  const timeDifference = getTimeDifference(currentTime, pushTime);

  return (
    <div className="report">
      <p>{`${username} | ${sha} | ${timeDifference}`}</p>
      <FailedTests failedSuites={failedSuites} />
    </div>
  );
};

export default Report;
