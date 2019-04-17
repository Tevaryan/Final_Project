import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Form, Label, Input, Button, FormText
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import {Link} from "react-router-dom"
import { FormGroup, FormLabel } from 'react-bootstrap';
import axios from "axios"

const NewItem = props => (
  <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Item Name</Label>
          <Col sm={10}>
            <Input type="text" name="item name" id="exampleEmail" onChange={props.name} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <FormLabel>Category</FormLabel>
              <br/>
              <select onChange={props.tagParent}>
              <option></option>
              {
                 props.optionsPrefecture.map((o, index)=> {
                   return(<option key={index} value={o}>{o}</option>)
                 }
                 )
               }
              </select>
              {
                props.tagParentValue ?
                (
                  <>
                    <FormLabel>Tag Children</FormLabel>
                    <select onChange={props.tagChildren}>
                    <option></option>
                    {
                      props.subOption[props.tagParentValue].map((o, index)=> {
                        return(<option key={index} value={o}>{o}</option>)
                      }
                      )
                    }
                      
                    </select>
                  </>
                ) : null
              }
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>file_name</Label>
          <Col sm={10}>
            <Input type="text" name="file name" id="exampleSelectMulti" onChange={props.fileName}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="description" id="exampleText" onChange={props.description}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={props.submit}>Submit</Button>
          </Col>
        </FormGroup>
       
      </Form>

);

class MyItems extends Component {

  state = {
    name: "",
    file_name:"",
    tag_parent:"",
    tag_children:"", 
    description:"",
    file_name:"",
    showModel:false
    }

  addItemHandler = (event) => {
    this.setState({
      showModel: !this.state.showModel
    })
  }

  nameInputHandler =(event)=>{
    this.setState({name:event.target.value})
  }

  tagParentInputHandler =(event)=>{
    this.setState({tag_parent:event.target.value})
  }

  tagChildrenInputHandler =(event)=>{
    this.setState({tag_children:event.target.value})
    
  }

  descriptionInputHandler =(event)=>{
    this.setState({description:event.target.value})
   
  }

  fileNameInputHandler =(event)=>{
    this.setState({file_name:event.target.value})
    
  }
  

  submitHandler = (event) => {

    alert('Success');
        event.preventDefault();
        const data ={
          name: this.state.name,
          tag_parent:this.state.tag_parent,
          tag_children:this.state.tag_children,
          description: this.state.description,
          file_name: this.state.file_name
        }
        axios.post(`http://localhost:5000/api/v1/item/new`, data, {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
          }
        })
        .then((response)=> {
         console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }

    
  render() {
    let subOptions={
      "Arts & Craft": [
        "Painting Drawing & Art Supplies","Beading & Jewelry Making",
        "Crafting",
        "Fabric",
        "Fabric Decorating",
        "Knitting & Crochet",
        "Needlework",
        "Organization, Storage & Transport",
        "Printmaking",
        "Scrapbooking & Stamping",
        "Sewing",
        "Party Decorations & Supplies",
        "Gift Wrapping Supplies"
      ], 
      "Automative":[
        "Car Care",
        "Car Electronics & Accessories",
        "Exterior Accessories",
        "Interior Accessories",
        "Lights & Lighting Accessories",
        "Motorcycle & Powersports",
        "Oils & Fluids",
        "Paint & Paint Supplies",
        "Performance Parts & Accessories",
        "Replacement Parts",
        "RV Parts & Accessories",
        "Tires & Wheels",
        "Tools & Equipment",
        "Automotive Enthusiast Merchandise",
        "Heavy Duty & Commercial Vehicle Equipment"],
      "Baby":[
        "Activity & Entertainment",
        "Apparel & Accessories",
        "Baby & Toddler Toys",
        "Baby Care",
        "Baby Stationery",
        "Car Seats & Accessories",
        "Diapering",
        "Feeding",
        "Gifts",
        "Nursery",
        "Potty Training",
        "Pregnancy & Maternity",
        "Safety",
        "Strollers & Accessories",
        "Travel Gear"],
      "Beuty & Personal Care":[
        "Makeup",
        "Skin Care",
        "Hair Care",
        "Fragrance",
        "Foot, Hand & Nail Care",
        "Tools & Accessories",
        "Shave & Hair Removal",
        "Personal Care",
        "Oral Care"],
      "Books":[
        "Arts & Photography",
        "Biographies & Memoirs",
        "Business & Investing",
        "Children",
        "Cookbooks, Food & Wine",
        "History",
        "Literature & Fiction",
        "Mystery & Suspense",
        "Romance",
        "Sci-Fi & Fantasy",
        "Teens & Young Adult"
      ],
      "Computers":[
        "Computer Accessories & Peripherals",
        "Computer Components",
        "Computers & Tablets",
        "Data Storage",
        "Laptop Accessories",
        "Monitors",
        "Networking Products",
        "Power Strips & Surge Protectors",
        "Printers",
        "Scanners",
        "Servers",
        "Tablet Accessories",
        "Tablet Replacement Parts",
        "Warranties & Services"
      ],
      "Electronics":[
        "Accessories & Supplies",
        "Camera & Photo",
        "Car & Vehicle Electronics",
        "Cell Phones & Accessories",
        "Computers & Accessories",
        "GPS, Finders & Accessories",
        "Headphones",
        "Home Audio",
        "Office Electronics",
        "Portable Audio & Video",
        "Security & Surveillance",
        "Service Plans",
        "Television & Video",
        "Video Game Consoles & Accessories",
        "Video Projectors",
        "Wearable Technology",
        "eBook Readers & Accessories"
      ],
      "Health & Household":[
        "Baby & Child Care",
        "Health Care",
        "Household Supplies",
        "Medical Supplies & Equipment",
        "Oral Care",
        "Personal Care",
        "Sexual Wellness",
        "Sports Nutrition",
        "Stationery & Gift Wrapping Supplies",
        "Vision Care",
        "Vitamins & Dietary Supplements",
        "Wellness & Relaxation"
      ],
      "Home & Kitchen":[
        "Kids Home Store",
        "Kitchen & Dining",
        "Bedding",
        "Bath",
        "Furniture",
        "Home Décor",
        "Wall Art",
        "Lighting & Ceiling Fans",
        "Seasonal Décor",
        "Event & Party Supplies",
        "Heating, Cooling & Air Quality",
        "Irons & Steamers",
        "Vacuums & Floor Care",
        "Storage & Organization",
        "Cleaning Supplies"
      ],
      "Luggage":[
        "Carry Ons",
        "Backpacks",
        "Garment Bags",
        "Travel Totes",
        "Luggage Sets",
        "Laptop Bags",
        "Suitcases",
        "Kids Luggage",
        "Messenger Bags",
        "Umbrellas",
        "Duffles",
        "Travel Accessories",
        "Women's Fashion",
        "Men's Fashion",
        "Girls Fashion",
        "Boys Fashion"
      ],
      "Sports & Outdoors":[
        "Outdoor Recreation",
        "Sports & Fitness",
        "Fan Shop"
      ],
      "Toys":[
        "Action Figures & Statues",
        "Arts & Crafts",
        "Baby & Toddler Toys",
        "Building Toys",
        "Dolls & Accessories",
        "Dress Up & Pretend Play",
        "Kids' Electronics",
        "Games",
        "Grown-Up Toys",
        "Hobbies",
        "Kids' Furniture, Décor & Storage",
        "Learning & Education",
        "Novelty & Gag Toys",
        "Party Supplies",
        "Puppets",
        "Puzzles",
        "Sports & Outdoor Play",
        "Stuffed Animals & Plush Toys",
        "Toy Remote Control & Play Vehicles",
        "Tricycles, Scooters & Wagons",
        "Video Games"
      ]




    }

    let options_prefecture = ["Arts & Craft", "Automative", "Baby", "Beuty & Personal Care", "Books", "Computers", "Electronics", "Health & Household", "Home & Kitchen", "Luggage", "Sports & Outdoors", "Toys"]











    return (
      <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'hidden', borderRight: "1px solid rgba(0,0,0,.05)"}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'auto'}}>  
          <button onClick={this.addItemHandler}>Add Item</button>
          {
            this.state.showModel === true
            ? <NewItem name={this.nameInputHandler} tagParent={this.tagParentInputHandler} tagChildren={this.tagChildrenInputHandler} fileName={this.fileNameInputHandler} description={this.descriptionInputHandler} submit={this.submitHandler} optionsPrefecture={options_prefecture} subOption={subOptions} tagParentValue={this.state.tag_parent}/>
            : null
          }

          </Col>
        </Row>
    </Container>
    )
  }
}

export default MyItems;



// tag parent selector
        // <Form>
        //     <FormGroup>
        //       <select>
        //       {
        //         options_prefecture.map((o, index)=> {
        //           return(<option key={index} value={o}>{o}</option>)
        //         }
        //         )
        //       }
        //       </select>
        //     </FormGroup>
        //   </Form>
