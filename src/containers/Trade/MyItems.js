import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import {Link} from "react-router-dom"

class MyItems extends Component {

<<<<<<< Updated upstream
=======
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

    axios.get(`http://localhost:5000/api/v1/item/show/me`,{
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

>>>>>>> Stashed changes
    
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#34495E', height: '100vh', overflow: 'auto'}}>
              <Row style={{height:'50%'}} className='Card_Row mt-4'>
                <Col sm='4'>
                      <Card>
                      <CardBody>
                      <CardTitle>My Feed</CardTitle>
                      </CardBody>
                      <div>
                        <img width="100%" src="../assets/images/jacket.jpg"/>
                      </div>

                      <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <Link to={`/Dashboard/TradeMain/Items`} className="nav-link">Items</Link>   
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                <Card>
                    <CardBody>
                      <CardTitle>My Feed</CardTitle>
                      </CardBody>
                        <img width="100%" src="../assets/images/jacket.jpg" />
                      <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                    <Card>
                  <CardBody>
                    <CardTitle>My Feed</CardTitle>
                  </CardBody>
                  <img width="100%" src="../assets/images/jacket.jpg" />
                  <CardBody>
                    <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
                </Col>
              </Row>
              <Row style={{height:'50%'}} className='Card_Row mt-5'>
                <Col sm='4'>
                      <Card>
                    <CardBody>
                      <CardTitle>My Feed</CardTitle>
                    </CardBody>
                    <img width="100%" src="../assets/images/jacket.jpg" />
                    <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                <Card>
                    <CardBody>
                      <CardTitle>My Feed</CardTitle>
                    </CardBody>
                    <img width="100%" src="../assets/images/jacket.jpg" />
                    <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                    <Card>
                  <CardBody>
                    <CardTitle>My Feed</CardTitle>
                  </CardBody>
                  <img width="100%" src="../assets/images/jacket.jpg" />
                  <CardBody>
                    <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
                </Col>
              </Row>
              <Row style={{height:'50%'}} className='Card_Row mt-5'>
                <Col sm='4'>
                      <Card>
                    <CardBody>
                      <CardTitle>My Feed</CardTitle>
                    </CardBody>
                    <img width="100%" src="../assets/images/jacket.jpg" />
                    <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                <Card>
                    <CardBody>
                      <CardTitle>My Feed</CardTitle>
                    </CardBody>
                    <img width="100%" src="../assets/images/jacket.jpg" />
                    <CardBody>
                      <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='4'>
                    <Card>
                  <CardBody>
                    <CardTitle>My Feed</CardTitle>
                  </CardBody>
                  <img width="100%" src="../assets/images/jacket.jpg" />
                  <CardBody>
                    <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
                </Col>
              </Row>
          </Col>
        </Row>
    </Container>
    )
  }
}

export default MyItems;