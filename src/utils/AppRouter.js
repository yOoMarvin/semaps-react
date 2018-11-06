import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../containers/App";
import SimpleMap from "../containers/Map";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/map/" component={SimpleMap} />
    </div>
  </Router>
);

export default AppRouter;
