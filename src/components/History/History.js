import React from "react";
import Reports from "../Reports/Reports";

const getUsername = () => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get("username");
};

const History = ({ pushers }) => {
  const username = getUsername();
  const details = pushers[username];

  return <Reports details={details} username={username} />;
};

export default History;
