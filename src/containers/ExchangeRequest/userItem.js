import React from "react";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";




class UserItem extends React.Component{

    state={
        items:[],
        user_name:""
    }

    componentDidMount(){
        this.fetch()
      }

    // get the user items
    fetch=()=>{
        axios( {
          url: `http://localhost:5000/api/v1/item/show/user_item/${this.props.match.params.id}`,
          headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
          method: "get"
        })
        .then((response)=>{
           
            this.setState({
                items: response.data.item,
                user_name: response.data.item[0].user_name
                
                })
                
        })
        .catch( (error)=> {
          console.log(error);
        });
      }
    

    render(){
       
        
        return(
           <div>
               <h1>{this.state.user_name}</h1>

                <Row>
                    {
                        this.state.items.map((item,index)=>{
                        
                        return(
                        
                        
                            
                            
                            <Col sm='3' key={index} className={"mt-5"}>
                                <Card>
                                <CardBody className="itemname">
                                    <CardTitle>
                                    {/* <span>Item{index}</span> */}
                                    {item.name}<br/>
                                    </CardTitle>
                                </CardBody>
                                <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images' />
                                <CardBody>
                                    <div className="itemtag">
                                        <CardText>
                                            {/* {item.file_name}<br/> */}
                                            {item.tag_parent}<br/>
                                        </CardText>
                                    </div>
                                    <div className="itemtag">
                                        <CardText>
                                            {item.tag_children}<br/>
                                        </CardText>
                                    </div>
                                    <div className="itemdescription">
                                        <CardText>
                                            {item.description}<br/>
                                        </CardText>
                                    </div>
                                

                                </CardBody>
                                </Card>
                            </Col>
            
                        
                        
                        
                        )
                        })
                    }
                </Row>

            </div>
        )
    }
}

export default UserItem;