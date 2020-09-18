/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';

import Logo from '../../assets/logo-mini-menagerie.png';
import {
  wrapperStyles,
  imageStyles,
  breedsShop,
  shopButton,
  navbar1,
  breedsButton,
  formSearch,
  searchText,
  searchButton,
  cart,
  modalBodyStyles,
} from './Header.styles';
import { Button } from 'react-bootstrap'


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div css={wrapperStyles}>
      <div css={navbar1}>
        <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
        <div css={breedsShop}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" css={breedsButton}>
            Breeds
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dog Breeds</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cat Breeds</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div css={shopButton}>Shop</div>
      </div>
      <div>
        <form css={formSearch}>
          <input type="text" css={searchText} placeholder="Search your future best friend"></input>
          <button type="submit" css={searchButton}><i class="fas fa-search"></i></button>
          <button type="submit" css={cart}><i class="fas fa-shopping-cart"></i></button>
       </form>
      </div>
      </div>
      <div>
        <Button variant="light" onClick={handleShow}>Sign Up</Button>
        <Button variant="light">Log In</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body css={modalBodyStyles}>
          <h2>Sign Up</h2>
          <h3>Create an Account</h3>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;