/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Dropdown, Modal, Button, Navbar, Nav } from 'react-bootstrap';

import Logo from "../../assets/logo-mini-menagerie.png";
import {
  imageStyles,
  shopButton,
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
    <React.Fragment>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
            <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        css={breedsButton}
                    >
                        Breeds
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            Dog Breeds
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Cat Breeds
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div css={shopButton}>
                    <a href="/shop">Shop</a>
                </div>
            </Nav>
            <div>
                <form css={formSearch}>
                    <input
                        type="text"
                        css={searchText}
                        placeholder="Search your future best friend"
                    ></input>
                    <button type="submit" css={searchButton}>
                        <i className="fas fa-search"></i>
                    </button>
                    <button type="submit" css={cart}>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </form>
            </div>
            <div>
                <Button variant="light" onClick={handleShow}>Sign Up</Button>
                <Button variant="light">Log In</Button>
            </div>
        </Navbar.Collapse>
        </Navbar>
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
      </React.Fragment>
    );
  }

export default Header;
