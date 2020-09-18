import React from 'react'
import { Global } from '@emotion/core';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';

import routes from './Router.routes';
import LandingPage from '../pages/LandingPage/LandingPage';
import globalStyles from '../styles/Global';
import FindBreeds from '../pages/FindBreeds/FindBreeds';
import AllPets from '../pages/AllPets/AllPets';

const Router = () => (
  <BrowserRouter>
  <Global styles={globalStyles}
    />
    <Switch>
      <Route 
        exact path={routes.HOME}
        component={LandingPage}
      />
      <Route 
        exact path={routes.ALLPETS}
        component={AllPets}
      />
      <Route 
        exact path={routes.ALLBREEDS}
        component={FindBreeds}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
