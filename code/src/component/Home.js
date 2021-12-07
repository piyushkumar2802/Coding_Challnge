import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div style={{
          padding:"10% 0"
      }}>
        <h1>
          Welcome To Food's <br /> Kichen
        </h1> 
        <Button variant="primary" size="sm">
        <Link to="/menu" style={Navhead}>Go To Menu</Link>
        </Button>{" "}
      </div>
    );
  }
}
const Navhead ={
    textDecoration:"none",
    marginTop:"5%",
    color:"#ccc"
}

export default Home;
