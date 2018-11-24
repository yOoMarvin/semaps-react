import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../containers/App";
import DBPedia from "../containers/DBPedia";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/linked-open-data" exact component={App} />
      <Route path="/db-pedia" exact component={DBPedia} />
    </div>
  </Router>
);

export default AppRouter;
