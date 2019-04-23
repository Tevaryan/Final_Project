import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row,
  } 
  from 'reactstrap';
import axios from "axios";
import TradeSideBar from '../../components/TradeSideBar.js'
import NewItem from "../../components/addItemHandler";
import "../../components/css/myitems.css";
import ShowItem from "../../components/showItems";
import Backdrop from '../../components/Backdrop/Backdrop'


class MyItems extends Component {

  state = {
    name: "",
    file_name:"",
    tag_parent:"",
    tag_children:"", 
    description:"",
    showAddItemModel:false,
    items: [],
    editItem: false,
    fileUpload: {}
    }


  componentDidMount() {

    this.fetchItems()
  }

  fetchItems = () => {
    console.log('aa')
    axios.get(`http://localhost:5000/api/v1/item/show/me`,{
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("JWT")
      }
    })
    .then(result => {
      this.setState({items:result.data.user})
      
        
    })
    .catch(error => {
        console.log('ERROR: ', error)
    })
  }


  addItemHandler = (event) => {
    this.setState({
      showAddItemModel: !this.state.showAddItemModel
    })
  }

  editItemHandler = (event) => {
    this.setState({
      editItem: !this.state.editItem
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
    this.setState({fileUpload: event.target.files[0]})
    console.log(event.target.files[0])
    console.log(event.target.files[0].name)
  }

  
  submitHandler = (event) => {

    // alert('Success');
        event.preventDefault();
        let formData = new FormData() // instantiate it
        

    
        formData.append('image', this.state.fileUpload, this.state.fileUpload.name)
        formData.append('name', this.state.name)
        formData.append('tag_parent', this.state.tag_parent)
        formData.append('tag_children', this.state.tag_children)
        formData.append('description', this.state.description)

        
        
        
        // console.log(formData)
        // const data ={
        //   name: this.state.name,
        //   tag_parent:this.state.tag_parent,
        //   tag_children:this.state.tag_children,
        //   description: this.state.description,
        //   image: formData
          
        // }
        
        axios({
          url: `http://localhost:5000/api/v1/item/new`,
          method:"post",          
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT"),
            Accept: 'multipart/form-data'
          },
          data: formData
        })
        .then((response)=> {
          console.log(response)
         let items = [...this.state.items]
         items.push(response.data.user)
         this.setState({items:items})
         this.setState({showAddItemModel:false})
         this.setState({file_name: response.data.user.file_name})
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
    
    // if (this.state.editItem ===true){
    //   return <EditItem optionsPrefecture={options_prefecture} subOption={subOptions} tagParentValue={this.state.tag_parent}/>
    // } 

    return (

      
      <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden', borderRight: "1px solid rgba(0,0,0,.05)"}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col>  
          <button onClick={this.addItemHandler}  className="additembutton">+ Add Item</button>
          {
            this.state.showAddItemModel === true
            ? <><Backdrop backdrop={this.addItemHandler}/>
            <NewItem name={this.nameInputHandler} tagParent={this.tagParentInputHandler} 
            tagChildren={this.tagChildrenInputHandler} fileName={this.fileNameInputHandler} 
            description={this.descriptionInputHandler} submit={this.submitHandler} 
            optionsPrefecture={options_prefecture} subOption={subOptions} 
            tagParentValue={this.state.tag_parent}  picture={this.state.file_name}/></>
            : null
          }
          <Row>
          {
              this.state.items.map((item, index)=> {
                        return(
                          <ShowItem key={index} item={item} index={index} 
                          optionsPrefecture={options_prefecture} subOption={subOptions} 
                          tagParentValue={this.state.tag_parent} refetch={this.fetchItems}></ShowItem>
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


