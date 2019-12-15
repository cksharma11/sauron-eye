import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Pushers from "../Pushers/Pushers";

const DashboardTable = ({ dashboard }) => {
  return (
    <table border="1">
      <DashboardHeader headings={["Pusher", "SHA", "Passed/Total", "Graph"]} />
      <Pushers dashboard={dashboard} />
    </table>
  );
};

export default DashboardTable;
