import React from "react";

const FailedTests = ({ detail }) => {
  return (
    <ul className="failed-cases-container">
      {detail.test.failedTests.map(failedTest => (
        <li>{failedTest}</li>
      ))}
    </ul>
  );
};

export default FailedTests;
