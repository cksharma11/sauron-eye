import React from "react";
import { Link } from "react-router-dom";

const PusherInfo = ({ pusher }) => {
  const { name, sha, passed, total, project } = pusher;
  return (
    <tr>
      <td>
        <Link to={`history?username=${name}`}> {name}</Link>
      </td>
      <td>
        <a href={`https://github.com/step-batch-7/${project}-${name}/commit/${sha}`}>{sha}</a>
      </td>
      <td>{`${passed}/${total}`}</td>
      <td>--</td>
    </tr>
  );
};

export default PusherInfo;
