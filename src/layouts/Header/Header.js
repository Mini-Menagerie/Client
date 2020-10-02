/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";

import {
    Dropdown,
    Modal,
    Button,
    Navbar,
    Nav,
    Row,
    Container,
    Col,
    Form,
    Badge,
} from "react-bootstrap";
import axios from "axios";

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
    wrapperButtonStyles,
    buttonLoginStyles,
    rowFormSignUp,
    navSearch,
} from "./Header.styles";
import Swal from "sweetalert2";
import swal from "sweetalert";

const Header = () => {
    const productCart = JSON.parse(localStorage.getItem("cartProduct"));
    const [show, setShow] = useState(false);
    const [handleForm, setHandleForm] = useState(false);
    const [loginModal, setHandleLoginModal] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    let user = JSON.parse(localStorage.getItem("user"));

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    });
    const [search, setSearch] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value,
        });
    };

    const logout = async (event) => {
        event.preventDefault();
        localStorage.clear();
        window.location.replace("/");
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await axios.post(
                "http://localhost:8000/userAccount/login",
                formLogin
            );

            if (user.status === 200) {
                Swal.fire({
                    title: "Sukses!",
                    text: "Login berhasil!",
                    icon: "success",
                });
                localStorage.setItem("menagerie", user.data.token);
                localStorage.setItem("user", JSON.stringify(user.data.user));
                setShow(false);
                window.location.replace("/");
            }
        } catch (error) {
            if (error.message === "Request failed with status code 400") {
                Swal.fire({
                    title: "Gagal!",
                    icon: "warning",
                });
                setShow(false);
            } else if (
                error.message === "Request failed with status code 404"
            ) {
                Swal({
                    title:
                        "Email sudah terdaftar menggunakan email social media!",
                    icon: "warning",
                });
                setShow(false);
            }
        }
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await axios.post(
                "http://localhost:8000/userAccount/register",
                form
            );
            if (user.status === 200) {
                swal("Register success");
                setShow(false);
            }
        } catch (error) {
            if (error.message === "Request failed with status code 400") {
                Swal({
                    title: "Email sudah terdaftar, gunakan Email lain",
                    icon: "warning",
                });
            } else if (
                error.message === "Request failed with status code 404"
            ) {
                Swal({
                    title:
                        "Email sudah terdaftar melalui Social Media, gunakan Email lain",
                    icon: "warning",
                });
                setShow(false);
            }
        }
    };

    const handleClose = () => {
        setShow(false);
        setHandleForm(false);
        setHandleLoginModal(false);
    };
    const handleShowSignUp = () => setShow(true);
    const handleShowLogin = () => {
        setHandleLoginModal(true);
        setShow(true);
    };

    const handleGoogleLogin = () => {
        const urlGoogleLogin = "http://localhost:8000/auth/google";
        window.location.replace(urlGoogleLogin);
    };

    const handleFacebookLogin = () => {
        const urlFacebookLogin = "http://localhost:8000/auth/facebook";
        window.location.replace(urlFacebookLogin);
    };

    const handleShowFormSignUp = () => {
        setHandleForm(true);
    };

    const handleLoginModal = () => {
        setHandleLoginModal(true);
    };

    const handleSignUpModal = () => {
        setHandleLoginModal(false);
    };

    const redirect = (event) => {
        event.preventDefault();
        const cart = JSON.parse(localStorage.getItem("cartProduct"));
        const userLogin = JSON.parse(localStorage.getItem("user"));
        let timerInterval
        if (cart === null) {
            Swal.fire({
                title: 'Your cart still empty!',
                text: 'Please shop first',
                timer: 3000,
                timerProgressBar: true,
                willOpen: () => {
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                    window.location.replace("/shop")
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        } else if (userLogin === null) {
            Swal.fire({
                title: 'You are not login',
                text: 'Please login or register first',
                timer: 3000,
                timerProgressBar: true,
                willOpen: () => {
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                    window.location.replace("/shop")
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        } else {
            window.location.replace("/cart");
        }
    };

    const searchBar = (event) => {
        event.preventDefault();

        localStorage.setItem("search", search);
        window.location.href = "/search-page";
    };
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    if (user === null) {
        return (
            <React.Fragment>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            css={imageStyles}
                            alt="Mini Menagerie"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
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
                                    <Dropdown.Item href="/all-breeds/category/dog">
                                        Dog Breeds
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/all-breeds/category/cat">
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
                                    style={{ backgroundColor: "#f5f5f5" }}
                                    onChange={handleSearch}
                                    value={search}
                                ></input>
                                <button
                                    type="submit"
                                    css={searchButton}
                                    onClick={searchBar}
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                                <Button
                                    type="submit"
                                    onClick={redirect}
                                    css={cart}
                                >
                                    <i className="fas fa-shopping-cart fa-lg"></i>
                                    <Badge pill variant="danger">
                                        {productCart !== undefined &&
                                            productCart !== null &&
                                            productCart.length}
                                    </Badge>
                                </Button>
                            </form>
                        </div>
                        <div>
                            <Button variant="light" onClick={handleShowSignUp}>
                                Sign Up
                            </Button>
                            <Button variant="light" onClick={handleShowLogin}>
                                Log In
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body css={modalBodyStyles}>
                        {loginModal ? (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign In</h2>
                                <Container>
                                    <Form onSubmit={handleLoginSubmit}>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleLogin}
                                                    value={formLogin.email}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleLogin}
                                                    value={formLogin.password}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                    block
                                                >
                                                    Log In
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button
                                                    onClick={handleLoginModal}
                                                >
                                                    Forgot password?
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <p>Or Login With</p>
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Sign In With Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Sign In With Facebook
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Need an account?
                                            <Button onClick={handleSignUpModal}>
                                                Sign Up
                                            </Button>
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        ) : (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign Up</h2>
                                <p>Create an Account</p>
                                {handleForm ? (
                                    <Container>
                                        <Form onSubmit={handleSubmit}>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Full Name"
                                                        name="fullName"
                                                        value={form.fullName}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        value={form.password}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Button
                                                        type="submit"
                                                        variant="primary"
                                                        block
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p css={buttonLoginStyles}>
                                                        Already have an account?
                                                        <Button
                                                            onClick={
                                                                handleLoginModal
                                                            }
                                                        >
                                                            Log In
                                                        </Button>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Container>
                                ) : (
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Signup with Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Signup with Facebook
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleShowFormSignUp}
                                        >
                                            Signup with Email
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Already have an account?
                                            <Button onClick={handleLoginModal}>
                                                Log In
                                            </Button>
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    } else if (user !== null) {
        return (
            <React.Fragment>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            css={imageStyles}
                            alt="Mini Menagerie"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{ justifyContent: "space-between" }}
                    >
                        <Nav className="mr-auto" css={navSearch}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    css={breedsButton}
                                >
                                    Breeds
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/all-breeds/category/dog">
                                        Dog Breeds
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/all-breeds/category/cat">
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
                                    style={{
                                        maxWidth: "70%",
                                        backgroundColor: "#f5f5f5",
                                    }}
                                    onChange={handleSearch}
                                    value={search}
                                ></input>
                                <button
                                    type="submit"
                                    css={searchButton}
                                    onClick={searchBar}
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                                <Button
                                    type="submit"
                                    onClick={redirect}
                                    css={cart}
                                >
                                    <i className="fas fa-shopping-cart fa-lg"></i>
                                    <Badge pill variant="danger">
                                        {productCart !== undefined &&
                                            productCart !== null &&
                                            productCart !== 0 &&
                                            productCart.length}
                                    </Badge>
                                </Button>
                            </form>
                        </div>
                        <div>
                            <a href={`/about-me`}>
                                {user.fullName == null
                                    ? user.email
                                    : user.fullName}
                            </a>
                            <Button
                                onClick={logout}
                                style={{
                                    marginLeft: "10px",
                                    backgroundColor: "#22891a",
                                    color: "white",
                                }}
                            >
                                Log Out
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body css={modalBodyStyles}>
                        {loginModal ? (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign In</h2>
                                <Container>
                                    <Form onSubmit={handleLoginSubmit}>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleLogin}
                                                    value={formLogin.email}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleLogin}
                                                    value={formLogin.password}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                    block
                                                >
                                                    Log In
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button
                                                    onClick={handleLoginModal}
                                                >
                                                    Forgot Password?
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <p>Or login with</p>
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Sign In with Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Sign In With Facebook
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Need an Account?
                                            <Button onClick={handleSignUpModal}>
                                                Sign Up
                                            </Button>
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        ) : (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign Up</h2>
                                <p>Create an Account</p>
                                {handleForm ? (
                                    <Container>
                                        <Form onSubmit={handleSubmit}>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Full Name"
                                                        name="fullName"
                                                        value={form.fullName}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        value={form.password}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row css={rowFormSignUp}>
                                                <Col>
                                                    <Button
                                                        type="submit"
                                                        variant="primary"
                                                        block
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p css={buttonLoginStyles}>
                                                        Already Have an Account?
                                                        <Button
                                                            onClick={
                                                                handleLoginModal
                                                            }
                                                        >
                                                            Log In
                                                        </Button>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Container>
                                ) : (
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Signup with Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Signup with Facebook
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleShowFormSignUp}
                                        >
                                            Signup with Email
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Already have an account?
                                            <Button onClick={handleLoginModal}>
                                                Log In
                                            </Button>
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
};

export default Header;
