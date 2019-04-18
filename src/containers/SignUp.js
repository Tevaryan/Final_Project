import React from "react";
import axios from "axios";
import{ Modal,Button,Form} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class SignUp extends React.Component{

    state = {
        username: "",
        email:"",
        password:"",
        login: false

        }

    nameInputHandler =(event)=>{
      this.setState({username:event.target.value})
    }

    emailInputHandler =(event)=>{
      this.setState({email:event.target.value})
    }

    passwordInputHandler =(event)=>{
      this.setState({password: event.target.value})
    }

    handleSubmit= (event)=> {
      const validateEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      const validatePassword = /^[\dA-Za-z]\w{8,}$/.test(this.state.password)
      const inputIsNotEmpty = this.state.email.length !== 0 && this.state.username.length !== 0 && this.state.password.length !== 0
      console.log(validatePassword && validateEmail && inputIsNotEmpty )

      if(validateEmail !== false){
        alert("please enter valid email address")
      }

      if(validatePassword !==false){
        alert("password format does not match!")
      }

      if(this.state.email.length === 0 ){
        alert("please enter your email address!")
      }

      if(this.state.password.lenth === 0){
        alert("please enter your password!")
      }

      if(this.state.username.lenth === 0){
        alert("please enter your username!")
      }

      if (validatePassword && validateEmail && inputIsNotEmpty){
        alert('Successfully Sign up! ');
        event.preventDefault();
        const data ={
          username: this.state.username,
          email: this.state.email,
          password:this.state.password,
          time: Date.now()
        }
        axios.post(`http://localhost:5000/api/v1/users/new`, data)
        .then((response) => {
          console.log(response)
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

    render(){

      if (this.state.login !==true){
        return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
      } else {
        return(
        <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={this.nameInputHandler}/>
                            
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="plase enter valid email" onChange={this.emailInputHandler}/>
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.passwordInputHandler} pattern="[\dA-Za-z]\w{8,14}$"/>
                            <Form.Text className="text-muted">
                              Password must contain more than 8 words
                            </Form.Text>
                    </Form.Group>
                </Modal.Body>
            
                <Modal.Footer>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>Sign Up</Button>
                <Button variant="secondary">Cancel</Button>
                </Modal.Footer>
        </Modal.Dialog>
      )
      }
    }
}
export default SignUp;