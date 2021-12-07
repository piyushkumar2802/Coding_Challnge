import React, { Component } from "react";
import { Form , Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <Form style={input}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={checkout}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={checkout}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" style={checkout}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const input={
  width:"50%",
  display:"inline-block",
  padding:"5%",
  background:"#8cb8f3"
}
const checkout={
  display:"block",
  textAlign:"initial"
}

export default Login;
