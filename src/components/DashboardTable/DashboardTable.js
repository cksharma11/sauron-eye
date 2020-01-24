import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Pushers from "../Pushers/Pushers";

const DashboardTable = ({ dashboard }) => {
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <DashboardHeader
          headings={["No", "Pusher", "SHA", "Passed/Total", "Time"]}
        />
        <Pushers dashboard={dashboard} />
      </thead>
    </table>
  );
};

export default DashboardTable;
