import React, { Component } from "react";
import axios from "axios";
import{ Modal,Button,Form} from 'react-bootstrap';



class SignUp extends React.Component{

    state = {
        username: "",
        email:"",
        password:"",
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
      alert('A name was submitted: ');
      event.preventDefault();
      const data ={
        username: this.state.username,
        email: this.state.email,
        password:this.state.password,
        time: Date.now()
      }
      axios.post(`http://localhost:5000/api/v1/users/new`, data)
      .then(function (response) {
        console.log(response)
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render(){

      

      return(

                    <Modal.Dialog>
                            <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                            </Modal.Header>
                        
                            <Modal.Body>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" onChange={this.nameInputHandler}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={this.emailInputHandler}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={this.passwordInputHandler} />
                                    
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

export default SignUp;