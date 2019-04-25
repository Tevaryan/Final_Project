import React, { Component }  from 'react';
import {
    Label, FormGroup, Button
  } 
  from 'reactstrap';

class ItemFilter extends Component {
    constructor(){
        super()
        this.state = {
            lock: true,
            dropdownOpen: false,
            tag_parent:'',
            tag_subOption: '',
            parentTag:
                ["Arts & Craft", "Automative", "Baby", "Beuty & Personal Care", "Books", "Computers", "Electronics",
                "Health & Household","Home & Kitchen", "Luggage","Sports & Outdoors", "Toys"],
            
            subOptions: {
                "Arts & Craft": [
                  "Painting Drawing & Art Supplies",
                  "Beading & Jewelry Making",
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
                ]}

        }
    }
    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    tagParentInputHandler =(event)=>{
        this.setState({tag_parent:event.target.value})
      }
    
    tagsubOptionInputHandler = (event) => {
        this.setState({tag_subOption: event.target.value})
        this.setState({lock: false})
    }

    submitFilters = () => {
        this.props.filteredLocations(this.state.tag_parent, this.state.tag_subOption)
        this.props.toggle()
    }


    
    render () {
        return (
            <>
                <FormGroup sm={2} className="p-2">
                    <Label >Category</Label>
                        <br/>
                        <select onChange={this.tagParentInputHandler}>
                        <option></option>
                        {
                            this.state.parentTag.map((o, index)=> {
                                return(<option key={index} value={o}>{o}</option>)
                            })
                        }
                        </select>
                        <hr/>
                        {
                        this.state.tag_parent ?
                        (
                            <>
                            <Label>Sub category</Label>
                            <br/>
                            <select onChange={this.tagsubOptionInputHandler} >
                            <option></option>
                            {
                                this.state.subOptions[this.state.tag_parent].map((o, index)=> {
                                return(<option key={index} value={o}>{o}</option>)
                                })
                            }
                            </select>
                            </>
                        ) : null
                        }
                        <hr/>
                    
                    <Button onClick={this.submitFilters} disabled = {this.state.lock}>Submit</Button>
                </FormGroup>
            </>
                // <Dropdown isOpen={this.state.dropdownOpen} onClick={this.toggle}>
                // <DropdownToggle caret>
                //     Filter by Category
                // </DropdownToggle>
                //     <DropdownMenu id='target' >
                //             <DropdownItem onClick={this.toggle}>Arts & Craft</DropdownItem>
                //             <DropdownItem>Automative</DropdownItem>
                //             <DropdownItem>Baby</DropdownItem>
                //             <DropdownItem>Beuty & Personal Care</DropdownItem>
                //             <DropdownItem>Books</DropdownItem>
                //             <DropdownItem>Computers</DropdownItem>
                //             <DropdownItem>Health & Household</DropdownItem>
                //             <DropdownItem>Electronics</DropdownItem>
                //             <DropdownItem>Home & Kitchen</DropdownItem>
                //             <DropdownItem>Luggage</DropdownItem>
                //             <DropdownItem>Sports & Outdoors</DropdownItem>
                //             <DropdownItem>Toys</DropdownItem>
                //     </DropdownMenu>
                // </Dropdown>
        )
    }
}
export default ItemFilter;