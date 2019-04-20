import React from 'react';
import DeliverySideBar from './DeliverySideBar'
import {Container, Col, Row,Card,CardBody,CardText,CardTitle,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import woodImage from '../../assets/images/floor-parquet-pattern-131667.jpg'
import RequestModal from './MakeRequestModal'

class Delivery extends React.Component{
    state={
        items:[],
        isModal: false,
        searchLoc:''
    }

    componentDidMount(){
      axios( {
        url: `http://localhost:5000/api/v1/request/show/`,
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
        method: "get"
      })
      .then((response)=>{
        // console.log(response.data.requests)
        this.setState({
          items: response.data.requests
        })
      })
      .catch( (error)=> {
        console.log(error);
      });
    }

    inputHandler=(event)=>{
      this.setState({
        searchLoc: event.target.value
      })
    }

    submitHandler=(event)=>{
      event.preventDefault()
      axios( {
          url: `http://localhost:5000/api/v1/request/show/${this.state.searchLoc}`,
          headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
          method: "get"
        })
        .then((response)=>{
          // console.log(response.data.requests)
          this.setState({
            items: response.data.requests
          })
        })
        .catch( (error)=> {
          console.log(error);
        });
    }


    modalHandler=()=>(
      this.setState({
        isModal: !this.state.isModal
      })
    )
      
    render(){
      // handle modal
        let modal;
        if(this.state.isModal) {
          modal = <RequestModal click={this.modalHandler}/>
        } else {
          modal = null
        }
        return(
          <>
            {modal}
            <Container fluid style={{fontFamily:'Rye'}}>
            <Row>
              <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
                <DeliverySideBar click={this.modalHandler} input={this.inputHandler} submit={this.submitHandler}/>
              </Col>
              <Col style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'auto'}}>
      
            <Row style={{
                backgroundImage:`url(${woodImage})`,
                backgroundSize: 'cover'
            }} className='Card_Row pt-2'>
            {
              this.state.items.map((item,index)=>{
                let link = '/Dashboard/message/' + item.user_id
                return(
                  <Col sm='4' key={index} className='my-3'>
                  <Card style={{backgroundColor:'#F8ECC2',boxShadow:'5px 10px',boxSizing:'border-box'}}>
                    <CardBody>
                    <CardTitle className="text-center mb-0" style={{fontSize:'30px'}}><strong>WANTED</strong></CardTitle>
                    </CardBody>
                    <div className="px-3">
                      <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images'/>
                    </div>
                    <CardBody>
                    <CardText>ownwer: {item.username}</CardText>
                    <CardText>Description: {item.description}</CardText>
                    <CardText>Reward: {item.reward}</CardText>
                    
                  </CardBody>
                  <div className="card-footer text-muted">
                    <Link to={{pathname: link,
                    state:{
                      profile_image: item.user_profile_image,
                      username: item.username,
                    }}}
                      ><Button color="secondary" className='btn-block'>Contact</Button></Link>
                  </div>
                  </Card>
                </Col>
                )
              })
            }
            </Row>
              </Col>
            </Row>
        </Container>
        </>
        )
    }
}

export default Delivery