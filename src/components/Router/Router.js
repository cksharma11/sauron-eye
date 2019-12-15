import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import pushers from "../../data/mock.json";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard.bind(this, { pushers })} />
      <Route path="/history" component={History.bind(this, { pushers })} />
    </Router>
  );
};

export default App;
