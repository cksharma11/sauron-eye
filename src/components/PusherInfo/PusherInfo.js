import React from "react";
import { Link } from "react-router-dom";

const PusherInfo = ({ pusher }) => {
  const { name, sha, passed, total } = pusher;
  return (
    <tr>
      <td>
        <Link to={`history?username=${name}`}> {name}</Link>
      </td>
      <td>{sha}</td>
      <td>{`${passed}/${total}`}</td>
      <td>--</td>
    </tr>
  );
};

export default PusherInfo;
