import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,
  Button, Row
} 
from 'reactstrap';
import axios from "axios";
import {Link, Redirect} from "react-router-dom"
import '../App.css';

class Login extends React.Component{

  state = {
    username: "",
    password:"",
    login:false
    }



nameInputHandler =(event)=>{
  this.setState({username:event.target.value})
}

passwordInputHandler =(event)=>{
  this.setState({password: event.target.value})
}

handleSubmit= (event)=> {

  const validatePassword = /^[\dA-Za-z]\w{8,}$/.test(this.state.password)
  const inputIsNotEmpty = this.state.username.length != 0 && this.state.password.length != 0

  if(validatePassword ===false){
    alert("password format does not match!")
  }

  if(this.state.password.lenth == 0){
    alert("please enter your password!")
  }

  if(this.state.username.lenth == 0){
    alert("please enter your username!")
  }

  if(validatePassword && inputIsNotEmpty){

        alert('Success');
        event.preventDefault();
        const data ={
          username: this.state.username,
          password:this.state.password,
          time: Date.now()
        }
        axios.post(`http://localhost:5000/api/v1/auth/login`, data)
        .then((response)=> {
          // console.log(response.data.user.id)
          // console.log(response.data.user.profile_picture)
          
          // store user information when login
          localStorage.setItem('username', response.data.user.username)
          localStorage.setItem('profile_picture', response.data.user.profile_picture)
          localStorage.setItem('user_id', response.data.user.id)
          localStorage.setItem('JWT', response.data.access_token)
          this.setState({login:true})
          
  
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  }

    // handler()=>{
    //   localStorage.removeItem("JWT")
    // }

  render(){
    if (this.state.login ===true){
      return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
    } else {
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
                      type="name"
                      name="name"
                      id="exampleName"
                      placeholder="enter your username"
                      onChange={this.nameInputHandler}
                      />
                      </FormGroup>
                      <FormGroup>
                      
                      <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                      onChange={this.passwordInputHandler}
                      />
                      </FormGroup>
                      <div className="d-flex align-items-center justify-content-between">
                      
                      <Button className = "LoginButton"
                      style={{borderRadius: "25px", width: '47%'}}
                      onClick={this.handleSubmit}>
                      Login
                      </Button>

                      <Button className = "LoginButton"
                      style={{borderRadius: "25px", width: '47%'}}
                      tag ={Link} to={`/signup`}> 
                      Sign Up
                      </Button>

                      </div>

                      <hr/>
                      
                      <Button className = "LoginButton" style={{borderRadius: "25px", width: '100%'}} color="danger">Login with Google</Button>
                      </Form>
                      </Col>
                      
                      </Row>
                      </Col>
                      </Row>
            </Container>
    )}
  }
  }
  


export default Login;