import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home.js";
import App from "./App.js";
import EarningSetup from "./containers/EarningSetup";
import BaseEarning from "./containers/BaseEarning";
import AccuralPage from "./containers/AccuralPage";
import TipsPage from "./containers/TipsPage";
import InfoPage from "./containers/InfoPage";
import CompletePage from "./containers/CompletePage";

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/earning-setup" component={EarningSetup} />
          <Route exact path="/base-page" component={BaseEarning} />
          <Route exact path="/accural-page" component={AccuralPage} />
          <Route exact path="/tips-page" component={TipsPage} />
          <Route exact path="/info-page" component={InfoPage} />
          <Route exact path="/complete-page" component={CompletePage} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
