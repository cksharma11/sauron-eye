import React from "react";
import Pusher from "../Pusher/Pusher";

const Dashboard = ({ pushers }) => {
  return (
    <div className="dashboard">
      {Object.keys(pushers).map(pusher => {
        const details = pushers[pusher];
        return <Pusher details={details} name={pusher} />;
      })}
    </div>
  );
};

export default Dashboard;
