import React from "react";
import PusherInfo from "../PusherInfo/PusherInfo";

const Pushers = ({ dashboard }) => {
  return dashboard.map((pusher, i) => {
    return <PusherInfo pusher={pusher} key={`${pusher}${i}`} number={i+1}/>;
  });
};

export default Pushers;
