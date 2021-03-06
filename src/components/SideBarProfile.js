import React, { Component } from 'react';
import "../components/css/tradesidebar.css";
import axios from "axios";
import{ Modal,Button,Form, Col,} from 'react-bootstrap';
import {Input} from 'reactstrap'
import '../mhd.css';



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
      picture:"",
      validated: false ,
      // valisation_username: true,
      // valisation_firstname: true,
      // valisation_lastname: true,
      // valisation_occupation: true,
      // valisation_location: true,
      // valisation_sex: true,
      // valisation_going_to: true,
      // valisation_date: true,
      // valisation_birthday: true,
      // valisation_brif: true,
      fileUpload: {},
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
    this.fetch_profile_img()
  }

fetch_profile_img=()=>{
  axios( {
    url: `http://localhost:5000/api/v1/users/new/show_profilepag`,
    headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
    method: "get"
  })
  .then( (response)=>{
    
    const { 
      username,
      firstname,
      lastname ,
      occupation ,
      location ,
      sex ,
      going_to ,
      date ,
      birthday ,
      brif ,
      picture 
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
      brif,
      picture
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



      onFormSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData() // instantiate it
        
        formData.append('image', this.state.fileUpload, this.state.fileUpload.name)

        axios({
          url: 'http://localhost:5000/api/v1/users/imges',
          method: "post", 
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            Accept: 'multipart/form-data'
          },
          data: formData,
        }).then( (response)=>{
          
          this.fetch_profile_img()
          this.setState({pictuer:response.data.image_url})           
        })
        
      }
    
  selectImage = e => {
    this.setState({fileUpload: e.target.files[0]})
  }
      

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    const {valisation_username, valisation_firstname, valisation_lastname, valisation_occupation, valisation_location, valisation_sex, valisation_going_to, valisation_date, valisation_birthday, valisation_brif}=this.state
    
    return (
      <div>
       <div className="borderchin">
        <div className="sidebarprofile">
          <img onClick={()=>this.setState({ lgShow: true })} src={this.state.picture} className="sidebarprofileimg " alt='aaaa' /> 
        </div>
        {/* <form onSubmit={this.onFormSubmit}>
          <input onChange={this.selectImage} id='test' className="fileInput" type="file" name='file'/>
          <button className="submitButton"  type="submit" >Upload Image</button>
        </form> */}


        <ul style={{listStyle: 'none'}} className="pl-0 mt-2 uls">
          <li>Name:  {this.state.username}</li>
          <li>Location:  {this.state.location}</li>
          <li>Destination:   {this.state.going_to}</li>
          {/* <li>{this.state.date}</li> */}
        </ul>
      </div>  
  {/*         
        <p className="sidebarname">{this.state.username}</p>
        <p className="location">{this.state.location}</p>
        <p className="items">{this.state.going_to}</p>
        <p className="items">{this.state.date}</p> */}

          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              
              <Modal.Title id="example-modal-sizes-title-lg">
                Profile Edit Page
              </Modal.Title>
            </Modal.Header>
              {/* form */}
              <Modal.Body>
              <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <div className="sidebarprofile">
                    <img onClick={()=>this.setState({ lgShow: true })} src={this.state.picture} className="sidebarprofileimg " alt='aaaa' /> 
                  </div>
                 </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom02">
                    <h5>Hey {this.state.username}!!!<br/><br/>{this.state.location}<br/></h5>
                  </Form.Group>
                </Form.Row>

            
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01" className="mb-0">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue={this.state.firstname}
                      name="firstname" onChange={this.handleChange}
                    />
                    <p style={red}>   </p>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-0">
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

                  <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-0">
                    <Form.Label>Usarname</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="UserName"
                      defaultValue={this.state.username}
                      name="username" onChange={this.handleChange}
                    />
                    <p style={red}>   </p>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01" className="mb-0">
                    <Form.Label>occupation</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Occupation"
                      defaultValue={this.state.occupation}
                      name="occupation" onChange={this.handleChange}
                    />
                    <p style={red}>   </p>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-0">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Man or Woman"
                      defaultValue={this.state.sex}
                      name="sex" onChange={this.handleChange}
                    />
                    <p style={red}>   </p>
                  </Form.Group>
                    
                  <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-0">
                    <Form.Label>Birthday</Form.Label>
                      <Input
                        required
                        type="date"
                        name="birthday"
                        id="exampleDate"
                        defaultValue={this.state.birthday}
                        name="birthday" onChange={this.handleChange}
                      />
                        <p style={red}>   </p>
                  </Form.Group>
                    
                  {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Label className="mb-0" for="exampleDate">birthday</Label>
                          <Input
                            required
                            type="text"
                            placeholder=" birthday"
                            defaultValue={this.state.birthday}
                            name="birthday" onChange={this.handleChange}
                          />
                    <p style={red}>   {!valisation_birthday && "please enter your info here"}</p>
                  </Form.Group> */}
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom03" className="mb-0">
                    <Form.Label>Current Location</Form.Label>
                    <Form.Control type="text" name="location" onChange={this.handleChange} defaultValue={this.state.location}  placeholder={this.state.location} required />
                    <p style={red}>
                    </p>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom04" className="mb-0">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" name="going_to" onChange={this.handleChange} defaultValue={this.state.going_to}  placeholder={this.state.going_to} required />
                    <p style={red}>
                    </p>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom05" className="mb-0">
                    <Form.Label>Itinerary Date</Form.Label>
                    {/* <Form.Control type="text" name="date" onChange={this.handleChange} defaultValue={this.state.date} placeholder={this.state.date} required /> */}
                    <Input
                        type="date"
                        name="date"
                        defaultValue={this.state.date}  required
                        onChange={this.handleChange}
                      />
                    <p style={red}>
                    
                    </p>
                  </Form.Group>


                </Form.Row>

           

                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-0">
                  <Form.Label>Introduction,Info</Form.Label>
                  <Form.Control as="textarea" rows="3" name="brif" onChange={this.handleChange}  defaultValue={this.state.brif}/>
                  <p style={red} className="mb-0"></p>
                </Form.Group>
                <form onSubmit={this.onFormSubmit}>
          <input onChange={this.selectImage} id='test' className="fileInput  " type="file" name='file'/>
          <button className="submitButton "  type="submit" >Upload Image</button>
        </form>
              </Modal.Body>
              <Modal.Footer className="">
                <Button type="submit" onClick={this.handleEditForm} className="btn-success">Edit Profile</Button>
              </Modal.Footer>

              
              
              {/* end form */}
          </Modal>

        

      </div>
    )
  }
}

export default SideBarProfile;

