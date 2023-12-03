import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

const index = () => {
  return (
    <Navbar bg ="dark">
      <Container>
        <NavLink as = {Link} to="/" className="mx-auto titulo text-decoration-none fs-1 fw-bold">The weather App
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default index;
