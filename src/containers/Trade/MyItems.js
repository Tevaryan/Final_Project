import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row, Form, Label, Input, Button, Card, CardText, CardBody, CardLink,
    CardTitle
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import axios from "axios";
import NewItem from "../../components/addItemHandler";
import "../../components/css/myitems.css"


class MyItems extends Component {

  state = {
    name: "",
    file_name:"",
    tag_parent:"",
    tag_children:"", 
    description:"",
    showModel:false,
    items: [],
    }


  componentDidMount() {

    axios.get(`http://localhost:5000/api/v1/item/show/items/me`,{
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("JWT")
      }
    })
    .then(result => {
      this.setState({items:result.data.user})
      console.log(this.state.items)
        
    })
    .catch(error => {
        console.log('ERROR: ', error)
    })
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

          let items = [...this.state.items]
          items.push(response.data.user)
          console.log(items)
          this.setState({items:items})
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
          <Col>  
          <button onClick={this.addItemHandler}  className="additembutton">+ Add Item</button>
          {
            this.state.showModel === true
            ? <NewItem name={this.nameInputHandler} tagParent={this.tagParentInputHandler} tagChildren={this.tagChildrenInputHandler} fileName={this.fileNameInputHandler} description={this.descriptionInputHandler} submit={this.submitHandler} optionsPrefecture={options_prefecture} subOption={subOptions} tagParentValue={this.state.tag_parent}/>
            : null
          }
          <Row>
          {
              this.state.items.map((item, index)=> {
                        return(
                          <Col sm='4' key={index} className={"mt-5"}>
                            <Card>
                              <CardBody className="itemname">
                                <CardTitle>
                                  {/* <span>Item{index}</span> */}
                                  {item.name}<br/>
                                </CardTitle>
                              </CardBody>
                              <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images' />
                              <CardBody>
                              <CardText>
                                {/* {item.file_name}<br/> */}
                                <div className="itemtag">
                                  {item.tag_parent}<br/>
                                </div>
                                <div className="itemtag">
                                  {item.tag_children}<br/>
                                </div>
                                <div className="itemdescription">
                                  {item.description}<br/>
                                </div>
                              </CardText>
                              <CardLink href="#">edit</CardLink>
                              <CardLink href="#">delete</CardLink>
                              </CardBody>
                            </Card>
                          </Col>
                        )
              }
              )
          }
                  
          </Row>
          </Col>
        </Row>
    </Container>
    )
  }
}

export default MyItems;


