import React from "react";
import Reports from "../Reports/Reports";
import { getUsername } from "../../helpers/helpers";

const History = ({ pushers }) => {
  const username = getUsername();
  const details = pushers[username];

  return <Reports details={details} username={username} />;
};

export default History;
