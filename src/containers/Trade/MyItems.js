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

    
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#65cca9', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f2fffa', height: '100vh', overflow: 'auto'}}>
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