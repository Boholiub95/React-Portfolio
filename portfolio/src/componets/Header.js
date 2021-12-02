import React, { Component } from 'react';

import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="./src/componets/img/logo1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="/"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="about">About me</Nav.Link>
                <Nav.Link href="contacts">Contacts</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
