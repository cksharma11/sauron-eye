import React from "react";

const FailedTests = ({ failedSuites }) => {
  return (
    <ul className="failed-cases-container">
      {failedSuites.map(failedTest => (
        <li key={failedTest}>{failedTest}</li>
      ))}
    </ul>
  );
};

export default FailedTests;
