import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,
  Button, Row
} 
from 'reactstrap';
import axios from "axios";

import {Link, Redirect} from "react-router-dom";
import "../components/css/login.css";
import Logo from "../assets/images/logo.jpg";
import Facebook from '../containers/Login/google_login'
import Google from '../containers/Login/facebook_login'
import SignUp from './SignUp'


class Login extends React.Component{

  state = {
    username: "",
    password:"",
    login:false,
    ismodal: false
    }

nameInputHandler =(event)=>{
  this.setState({username:event.target.value})
}

passwordInputHandler =(event)=>{
  this.setState({password: event.target.value})
}

handleSubmit= (event)=> {


  const validatePassword = /^[\dA-Za-z]\w{8,}$/.test(this.state.password)
  const inputIsNotEmpty = this.state.username.length !== 0 && this.state.password.length !== 0

  if(validatePassword ===false){
    alert("password format does not match!")
  }

  if(this.state.password.lenth === 0){
    alert("please enter your password!")
  }

  if(this.state.username.lenth === 0){
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
          // console.log(response.data)
          localStorage.setItem('username', response.data.user.username)
          if(response.data.user.destination){
            localStorage.setItem('destination', response.data.user.destination)
          }
          if(response.data.user.location){
            localStorage.setItem('location', response.data.user.location)
            }
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

  modalHandler=()=>(
    this.setState({
        ismodal: !this.state.ismodal
    })
)

  render(){
    let signup = this.state.ismodal?  signup = <SignUp modal={this.modalHandler}/>: null

    if (this.state.login ===true){
      return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
    } else {
    return (
          <>
            {signup}
            <div id="root2">
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
                                onChange={this.nameInputHandler}/>
                            </FormGroup>
                            <FormGroup>
                              <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="password"
                                onChange={this.passwordInputHandler}/>
                              </FormGroup>
                              <div className="d-flex align-items-center justify-content-between">
                                <Button 
                                  className = "LoginButton"
                                  style={{borderRadius: "25px", width: '47%'}}
                                  onClick={this.handleSubmit}>
                                  Login
                                </Button>
                                <Button 
                                  className = "LoginButton"
                                  style={{borderRadius: "25px", width: '47%'}}
                                   onClick={this.modalHandler}> 
                                  Sign Up
                                </Button>
                              </div>
                            <hr/>
                            <Button className = "LoginButton" style={{borderRadius: "25px", width: '100%'}} color="danger" >Login with Google</Button>
                            <Facebook/>
                            <Google/>
                          </Form>
                        </Col>

                      </Row>
                    </Col>
                  </Row>
                </Container>
                <div className="containerforlogintext">
                  <p >barter</p>
                  <p>/ˈbɑːtə/</p>
                  <p>verb</p>
                  <p>exchange (goods or services) for other<br/> goods or services without using money.</p>
                  <br/>
                  <br/>
                  <p>“ The greatest quest in life is to reach  <br/>one's potential.” -Mychal Wynn.</p>
                </div>
                <div className="logo2">
                  <img src={Logo}></img>
              </div>
            </div>
          </>
    )}
  }
  }
  


export default Login;