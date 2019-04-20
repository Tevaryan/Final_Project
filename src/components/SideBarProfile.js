import React, { Component } from 'react';
import "../components/css/tradesidebar.css";
import axios from "axios";
import{ Modal,Button,Form, Col} from 'react-bootstrap';


const red = {
  fontSize: 12,
  color: 'red'
};


class SideBarProfile extends Component {
  constructor () {
    super();
    this.state={
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
      validated: false ,
      valisation_username: true,
      valisation_firstname: true,
      valisation_lastname: true,
      valisation_occupation: true,
      valisation_location: true,
      valisation_sex: true,
      valisation_going_to: true,
      valisation_date: true,
      valisation_birthday: true,
      valisation_brif: true
    }

  }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    // handleSubmit(event) {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   this.setState({ validated: true });
    // }

  componentDidMount(){
    axios( {
      url: `http://localhost:5000/api/v1/users/new/show_profilepag`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then( (response)=>{
      const { 
        username = '',
        firstname = '',
        lastname = '',
        occupation = '',
        location = '',
        sex = '',
        going_to = '',
        date = '',
        birthday = '',
        brif = ''
      } = response.data.user
      
      this.setState({
        username,
        firstname,
        lastname,
        occupation,
        location,
        sex,
        going_to,
        date, 
        birthday,
        brif  
      })     
    })
    .catch( (error)=> {
      console.log(error);
    });
  }




  handleEditForm = ()=>{
    const { username, firstname, lastname, occupation, location, sex, going_to, date, birthday, brif } = this.state
    // if (!username.length|| !firstname.length|| !lastname.length|| !occupation.length|| !location.length|| !sex.length|| !going_to.length|| !date.length|| !birthday.length|| !brif.length){
    //   if (!username){this.setState({valisation_username: false})}
    //   if (!firstname){this.setState({valisation_firstname: false})}
    //   if (!lastname){this.setState({valisation_lastname: false})}
    //   if (!occupation){this.setState({valisation_occupation: false})}
    //   if (!location){this.setState({valisation_location: false})}
    //   if (!sex){this.setState({valisation_sex: false})}
    //   if (!going_to){this.setState({valisation_going_to: false})}
    //   if (!date){this.setState({valisation_date: false})}
    //   if (!birthday){this.setState({valisation_birthday: false})}
    //   if (!birthday){this.setState({valisation_date: false})}
    //   if (!brif){this.setState({valisation_date: false})}
    // }else{
      axios( {
        url: `http://localhost:5000/api/v1/users/new/edit_profilepag`,
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}`},
        method: "post",
        data:{
          username,
          firstname,
          lastname,
          occupation,
          location,
          sex,
          going_to,
          date, 
          birthday,
          brif      

      }
      })
      .then( (response)=>{
          console.log(response)
          const { username, firstname, lastname, occupation, location, sex, going_to, date, birthday, brif } = this.state
          this.setState({
            username,
            firstname,
            lastname,
            occupation,
            location,
            sex,
            going_to,
            date, 
            birthday,
            brif,
            lgShow: false
          })     
        })
        .catch( (error)=> {
          console.log(error);
        });
      }
    

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    const {valisation_username, valisation_firstname, valisation_lastname, valisation_occupation, valisation_location, valisation_sex, valisation_going_to, valisation_date, valisation_birthday, valisation_brif}=this.state
    return (
      <div className="sidebarprofile">

        {/* <img src={this.state.picture} className="sidebarprofileimg" alt='aaaa' onClick={() => this.setState({ lgShow: true })}/> */}
        <img src="https://source.unsplash.com/random/300x200" className="sidebarprofileimg" alt='aaaa' onClick={() => this.setState({ lgShow: true })}/>
        
        <p className="sidebarname">{this.state.username}</p>
        <p className="location">{this.state.location}</p>
        <p className="items">{this.state.going_to}</p>
        <p className="items">{this.state.date}</p>

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
              {/* form */}
              

              <Modal.Body>
              

              <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <img src={this.state.pictuer} className="sidebarprofileimg" alt='aaa'/>
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
                      name="firstname" onChange={this.handleChange}
                    />
                    <p style={red}>   {!valisation_firstname && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.lastname}
                      name="lastname" onChange={this.handleChange}
                    />
                    <p style={red}>   {!valisation_lastname && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Usarname</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.username}
                      name="username" onChange={this.handleChange}
                    />
                    <p style={red}>   {!valisation_username && "please enter your info here"}</p>
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
                      name="occupation" onChange={this.handleChange}
                    />
                    <p style={red}>   {!valisation_occupation && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.sex}
                      name="sex" onChange={this.handleChange}
                    />
                    
                    <p style={red}>   {!valisation_sex && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>birthday</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=" birthday"
                      defaultValue={this.state.birthday}
                      name="birthday" onChange={this.handleChange}
                    />
                    <p style={red}>   {!valisation_birthday && "please enter your info here"}</p>
                  </Form.Group>
                </Form.Row>



                

                


                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" name="location" onChange={this.handleChange} defaultValue={this.state.location}  placeholder={this.state.location} required />
                    <p style={red}>

                    {!valisation_location && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>going_to</Form.Label>
                    <Form.Control type="text" name="going_to" onChange={this.handleChange} defaultValue={this.state.going_to}  placeholder={this.state.going_to} required />
                    <p style={red}>

                    {!valisation_going_to && "please enter your info here"}</p>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" name="date" onChange={this.handleChange} defaultValue={this.state.date} placeholder={this.state.date} required />
                    <p style={red}>
                    
                    {!valisation_date && "please enter your info here"}</p>
                  </Form.Group>
                </Form.Row>

                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Info.</Form.Label>
                  <Form.Control as="textarea" rows="3" name="brif" onChange={this.handleChange}  defaultValue={this.state.brif}/>
                  <p style={red}>{!valisation_brif && "please enter your info here"}</p>
                </Form.Group>
                <Modal.Body><Button type="submit" onClick={this.handleEditForm}>Edit Profile</Button></Modal.Body>
                
              


              </Modal.Body>


              {/* end           form */}




              
            
          </Modal>

        {/* </ButtonToolbar> */}
        

      </div>
    )
  }
}

export default SideBarProfile;

