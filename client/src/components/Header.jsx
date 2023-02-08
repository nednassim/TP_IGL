import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { redirect, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(localStorage.getItem('userInfo'));
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUserInfo({});
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Image src="/logo_white.png" alt="Logo" />
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/create">
                <Nav.Link>
                  <i className="fas fa-home"></i> Create
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title="Sohaib" id="username">
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
