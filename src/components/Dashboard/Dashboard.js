import React from "react";
import * as utils from "../../utils/utils";
import Puhser from "../Pusher/Pusher";

const Dashboard = () => {
  const pushers = utils.getAllPusher();
  return (
    <div className="dashboard">
      {pushers.map(pusher => (
        <Puhser pusher={pusher} />
      ))}
    </div>
  );
};

export default Dashboard;
