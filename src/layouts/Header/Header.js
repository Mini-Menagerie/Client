/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSelector } from 'react-redux'
import { Button, Badge, Navbar, Nav, Dropdown } from "react-bootstrap";

import Logo from "../../assets/logo-mini-menagerie.png";
import {
    imageStyles,
    breedsButton,
    formSearch,
    searchText,
    searchButton,
    cart,
    shopButton,
} from "./Header.styles";

const Header = () => {
    const productCart = useSelector(state => state.addToCart)
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
                                <i className="fas fa-search fa-lg"></i>
                            </button>
                            <Button type="submit" css={cart}>
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                <Badge pill variant="danger">{productCart.cart !== undefined && productCart.cart.length}</Badge>
                            </Button>
                        </form>
                    </div>
                    <div>
                        <Button variant="light">Sign Up</Button>
                        <Button variant="light">Log In</Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
