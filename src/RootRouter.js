import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import TasksPage from "./containers/TasksPage";

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={TasksPage} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
