import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,Offcanvas } from "react-bootstrap";
import {BiRestaurant} from 'react-icons/bi';


class Header extends Component {
  render() {
    return (
      <div>
        
<Navbar style={{
  background:"#3f51b5"
}} expand={false}>
          <Container fluid>
            <Navbar.Brand style={{
                fontWeight:"bold",
                fontSize:"24px",
                color:"#3356d1"
            }}><Link to="/" style={{textDecoration:"none" , color:"#ccc"}}>< BiRestaurant />Food's Restaurent</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link to="/" style={Navhead}>Home</Link></Nav.Link>
                <Nav.Link><Link to="/menu" style={Navhead}>Menu</Link></Nav.Link>
                <Nav.Link><Link to="/fooditem" style={Navhead}>FoodItem</Link></Nav.Link>
                <Nav.Link><Link to="/thanku" style={Navhead}>Thanku</Link></Nav.Link>
                <Nav.Link><Link to="/login" style={Navhead}>Login</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const Navhead ={
    textDecoration:"none",
    fontSize:"22px",
    color:"#ea4b64"
}

export default Header;
