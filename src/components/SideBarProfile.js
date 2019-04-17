import React, { Component } from 'react';
import picture from "../assets/images/satan.jpg";
import "../components/css/tradesidebar.css";
import axios from "axios";
import{ Modal,Button,ButtonToolbar, Form, Col, InputGroup} from 'react-bootstrap';





class SideBarProfile extends Component {
  
    state={
      lgShow: false,
      username: "",
      firstname: "",
      lastname: "",
      occupation: "",
      location: "",
      sex: "",
      going_to: "",
      date: "",
      birthday: "",
      brif: "",
      pictuer:"",
      validated: false 
    }


    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }

  componentDidMount(){
    axios( {
      url: `http://localhost:5000/api/v1/users/new/show_profilepag`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then( (response)=>{
      console.log(response)
      this.setState({
        username:response.data.user.username,
        firstname:response.data.user.firstname,
        lastname:response.data.user.lastname,
        occupation:response.data.user.occupation,
        location:response.data.user.location,
        going_to:response.data.user.going_to,
        date:response.data.user.date,
        sex:response.data.user.sex,
        birthday:response.data.user.birthday,
        brif:response.data.user.brif,
        pictuer:response.data.user.pictuer
      })     
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

 

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return (
      <div className="sidebarprofile">
        <img src={this.state.pictuer} className="sidebarprofileimg"/>
        <p className="sidebarname">{this.state.username}</p>
        <p className="location">{this.state.location}</p>
        <p className="items">{this.state.going_to}</p>
        <p className="items">{this.state.date}</p>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ lgShow: true })}>
            Large modal
          </Button>

          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              
              
              <Modal.Title id="example-modal-sizes-title-lg">
                Profile Page
              </Modal.Title>
            </Modal.Header>
              {/* form                 */}
              

              <Modal.Body>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={e => this.handleSubmit(e)}
              >

              <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <img src={this.state.pictuer} className="sidebarprofileimg"/>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom02">
                    <h5>{this.state.username}<br/><br/>{this.state.location}<br/><br/>I am going to {this.state.going_to} in {this.state.date}</h5>
                    
                  </Form.Group>
                 
                </Form.Row>



                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue={this.state.firstname}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.lastname}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Usarname</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.username}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>


                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>occupation</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue={this.state.occupation}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.sex}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>birthday</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.birthday}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>



                

                


                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder={this.state.location} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>going_to</Form.Label>
                    <Form.Control type="text" placeholder={this.state.going_to} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder={this.state.date} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Info.</Form.Label>
                  <Form.Control as="textarea" rows="3" defaultValue={this.state.brif}/>
                </Form.Group>
                <Modal.Body><Button type="submit">Edit Profile</Button></Modal.Body>
                
              </Form>


              </Modal.Body>


              {/* end           form                 */}




              
            
          </Modal>

        </ButtonToolbar>
        
      </div>
    )
  }
}

export default SideBarProfile;

