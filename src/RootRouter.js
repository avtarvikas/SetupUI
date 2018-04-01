import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home.js";
import App from "./App.js";
import EarningsSetup from "./containers/EarningsSetup";

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={EarningsSetup} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
