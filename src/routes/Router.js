import React from 'react'
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';

import routes from './Router.routes';
import LandingPage from '../pages/LandingPage/LandingPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route 
        path={routes.HOME}
        component={LandingPage}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
