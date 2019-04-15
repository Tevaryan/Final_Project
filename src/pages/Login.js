import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,
  Button, Row
} 
from 'reactstrap';
import {Link} from "react-router-dom"
import '../App.css';

class Login extends Component {
  render() {
    return (
      <Container className="Login" fluid>
      <Row className='loginRow'>
        <Col sm="5" className="picture_space" ></Col>
        <Col className="Form-Container" sm="7">
        <Row>
          <Col sm='3'></Col>
            <Col sm='6' className = "login">
                <Form className="form">
                  <FormGroup>

                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="myemail@email.com"
                    />
                  </FormGroup>
                  <FormGroup>

                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between">

                    <Button className = "LoginButton"
                            style={{borderRadius: "25px", width: '47%'}}
                            tag ={Link} to={`/Dashboard/TradeMain/MyFeed`}> 
                            Login
                            </Button>
                    <a className="SignUp-Link mr-5">Sign Up now!</a>
                  </div>
                  <hr/>
                  <Button className = "LoginButton" style={{borderRadius: "25px", width: '100%'}} color="danger">Login with Google</Button>
                </Form>
            </Col>

          </Row>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Login;