import React from "react";
import { Link } from "react-router-dom";

const Pusher = ({ details, name }) => {
  return (
    <div className="pusher">
      <Link to={`history?username=${name}`}>{name}</Link>
      <div>{`Total Tests ->  ${details[0].test.total}`}</div>
      <div>{`Pass hui tests ->  ${details[0].test.passed}`}</div>
    </div>
  );
};

export default Pusher;
