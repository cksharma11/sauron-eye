import React from "react";

const FailedTests = ({ failedTests }) => {
  return (
    <ul className="failed-cases-container">
      {failedTests.map(failedTest => (
        <li key={failedTest}>{failedTest}</li>
      ))}
    </ul>
  );
};

export default FailedTests;
