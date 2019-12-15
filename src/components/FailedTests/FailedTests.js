import React from "react";

const FailedTests = ({ detail }) => {
  const { failedTests } = detail.test;
  return (
    <ul className="failed-cases-container">
      {failedTests.map(failedTest => (
        <li key={failedTest}>{failedTest}</li>
      ))}
    </ul>
  );
};

export default FailedTests;
