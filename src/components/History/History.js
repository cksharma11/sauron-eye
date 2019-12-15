import React from "react";

const getUsername = () => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get("username");
};

const History = ({ pushers }) => {
  const username = getUsername();
  const details = pushers[username];

  return (
    <div className="details">
      {details.map(detail => {
        return Report(detail, username);
      })}
    </div>
  );
};

function Report(detail, username) {
  return (
    <div className="report">
      <p>{`${username} | ${detail.sha} | ${detail.time}`}</p>
      {FailedTestCases(detail)}
    </div>
  );
}

function FailedTestCases(detail) {
  return (
    <ul className="failed-cases-container">
      {detail.test.failedTests.map(failedTest => (
        <li>{failedTest}</li>
      ))}
    </ul>
  );
}

export default History;
