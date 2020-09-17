import React from 'react'
import { Global } from '@emotion/core';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';

import routes from './Router.routes';
import LandingPage from '../pages/LandingPage/LandingPage';
import globalStyles from '../styles/Global';
import FindBreeds from '../pages/FindBreeds/FindBreeds';

const Router = () => (
  <BrowserRouter>
  <Global styles={globalStyles}
    />
    <Switch>
      <Route 
        path={routes.HOME}
        component={LandingPage}
      />
      <Route 
        path={routes.ALLPETS}
        component={LandingPage}
      />
      <Route 
        path={routes.ALLBREEDS}
        component={FindBreeds}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
