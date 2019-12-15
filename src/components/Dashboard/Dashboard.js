import React from "react";
import DashboardTable from "../DashboardTable/DashboardTable";
import { getSortedDashboard } from "../../helpers/helpers";

const Dashboard = ({ pushers }) => {
  const sortedDashboard = getSortedDashboard(pushers);

  return (
    <div className="dashboard">
      <DashboardTable dashboard={sortedDashboard} />
    </div>
  );
};

export default Dashboard;
