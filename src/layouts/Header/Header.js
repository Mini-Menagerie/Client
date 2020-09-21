/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Dropdown, Modal, Button } from 'react-bootstrap';

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
  bodyTitleStyles,
} from './Header.styles';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGoogleLogin = () => {
    const urlGoogleLogin = "http://localhost:8000/auth/google";
    window.location.replace(urlGoogleLogin)
  }

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
        <div css={shopButton}><a href='/shop'>Shop</a></div>
      </div>
      </div>
      <div>
        <form css={formSearch}>
          <input type="text" css={searchText} placeholder="Search your future best friend"></input>
          <button type="submit" css={searchButton}><i className="fas fa-search"></i></button>
          <button type="submit" css={cart}><i className="fas fa-shopping-cart"></i></button>
       </form>
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
          <h2 css={bodyTitleStyles}>Sign Up</h2>
          <p>Create an Account</p>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;