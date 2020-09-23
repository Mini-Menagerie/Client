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
import PetsDetail from '../pages/PetsDetail/PetsDetail';
import PetShop from '../pages/PetShop/PetShop';
import AdoptionForm from '../pages/AdoptionForm/AdoptionForm'
import StatusRequest from '../pages/StatusRequest/StatusRequest';
import AdoptedHistory from '../pages/AdoptedHistory/AdoptedHistory';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Checkout from '../pages/Checkout/Checkout';
import SearchPage from '../pages/searchPage/searchPage';
import AboutMe from '../pages/AboutMe/AboutMe'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import CategoryPet from '../pages/CategoryAllPets/CategoryAllPets';


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
        exact path={routes.ADOPTIONFORM}
        component={AdoptionForm}
      />
      <Route
        exact path={routes.ALLBREEDS}
        component={FindBreeds}
      />
      <Route
        exact path={routes.SEARCHPAGE}
        component={SearchPage}
      />
      <Route
        exact path={routes.PETSDETAIL}
        component={PetsDetail}
      />
      <Route
        exact path={routes.STATUSREQUEST}
        component={StatusRequest}
      />
      <Route
        exact path={routes.ADOPTEDHISTORY}
        component={AdoptedHistory}
      />
      <Route
        exact path={routes.CHECKOUT}
        component={Checkout}
      />
      <Route
        exact path={routes.PETSHOP}
        component={PetShop}
      />
      <Route
        exact path={routes.PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Route
        exact path={routes.ABOUTME}
        component={AboutMe}
      />
      <Route
        exact path={routes.SHOPPINGCART}
        component={ShoppingCart}
      />
      <Route
        exact path={routes.CATEGORYPET}
        component={CategoryPet}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;