import React from "react";
import PusherInfo from "../PusherInfo/PusherInfo";

const Pushers = ({ dashboard }) => {
  return dashboard.map(pusher => {
    return <PusherInfo pusher={pusher} key={pusher}/>;
  });
};

export default Pushers;
