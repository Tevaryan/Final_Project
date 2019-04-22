import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';

import axios from 'axios'
import SearchSideBar from './SearchItemSideBar';
import SearchItems from './searchedItems';


class MyFeed extends Component {
  state={
    items:[],
    keyword:'',
    dropdownOpen: false,

  }

  componentDidMount(){
    this.fetch()
  }

  componentDidUpdate(prevProps) {
    axios( {
      url: `http://localhost:5000/api/v1/item/show/${this.props.match.params.item}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then((response)=>{
      this.setState({
        items: response.data.item,
        keyword: this.props.match.params.item
      })
      if(prevProps.match.params.item !== this.props.match.params.item) {
        this.setState({
          items: response.data.item,
          keyword: this.props.match.params.item
        })
      }
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

  fetch=()=>{
    axios( {
      url: `http://localhost:5000/api/v1/item/show/${this.props.match.params.item}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then((response)=>{
      
      this.setState({
        items: response.data.item,
        keyword: this.props.match.params.item
      })
      
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

  toggle=()=> {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  detailSearch=(event)=>{
   
    axios( {
      url: `http://localhost:5000/api/v1/item/show/${this.props.match.params.item}?tag_children=${event.target.innerHTML}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get",
    })
    .then((response)=>{
      this.setState({
        items: response.data.item,
        keyword: this.props.match.params.item
      })
   
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

    
  render() {

    return (
      <Container fluid>
      <Row>
        <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
          <SearchSideBar parentTag={this.props.match.params.item} childTag={this.detailSearch}/>
        </Col>
        <Col style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'auto'}}>

      <Row style={{height:'50%'}} className='Card_Row mt-4'>
        {
          this.state.items.map((item,index)=>{
            let link = '/Dashboard/message/' + item.owner_user_id
            return(
            
              <SearchItems refetch={this.fetch} key={index} item={item} link={link}></SearchItems>
           
          
            )
          })
        }
        
      </Row>
        </Col>
      </Row>
  </Container>
    )
  }
}

export default MyFeed;