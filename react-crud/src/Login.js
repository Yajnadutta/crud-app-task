import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
class Login extends React.Component {
  render() {
    return (
      <div>
        <Container >
            <h1 style={{textAlign:'center'}}>React CRUD</h1>
          <Card style={{ width: "22rem",margin:'auto' }}>
            <Card.Body>
              <Card.Title className="text-center"><h3>Login</h3></Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" className="btn-block">
                <Link to="/employeedetails"  type="submit" className="text-white" >
                  Submit
                </Link>
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Login;
