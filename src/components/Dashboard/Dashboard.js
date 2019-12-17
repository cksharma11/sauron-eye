import React from "react";
import DashboardTable from "../DashboardTable/DashboardTable";
import { getSortedDashboard } from "../../helpers/helpers";
import Loader from "../Loader/Loader";

const Dashboard = ({ pushers }) => {
  const dashboard = getSortedDashboard(pushers);
  return (
    <div className="dashboard">
      {dashboard.length ? (
        <DashboardTable dashboard={dashboard} />
      ) : (
        <Loader message="Sauron is opening eye ..." />
      )}
    </div>
  );
};

export default Dashboard;
