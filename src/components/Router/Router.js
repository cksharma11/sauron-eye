import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";

const getPushersFromGollumJi = async () => {
  return await fetch("https://gollum-ji.herokuapp.com/test").then(res =>
    res.json()
  );
};

let time = 500;

const App = () => {
  const [pushers, setPushers] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      const gollumJiData = await getPushersFromGollumJi();
      setPushers(gollumJiData);
      time = 5000;
    }, time);
  }, [pushers]);

  return (
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={Dashboard.bind(this, { pushers })} />
      <Route path="/history" component={History.bind(this, { pushers })} />
    </Router>
  );
};

export default App;
