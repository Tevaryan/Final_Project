import React from "react";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {Redirect} from "react-router-dom"



class ChooseItem extends React.Component{

    state={
        items:[],
        user_name:"",
        update: false
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
                user_name: response.data.item[1].user_name
                
                })
                
        })
        .catch( (error)=> {
          console.log(error);
        });
      }

    chooseItem = (item_id) =>{

        const data ={
            user_id:this.props.location.state.user_id,
            wanted_item_id:this.props.location.state.wanted_item_id,
            give_item_id:item_id
          }
          axios.post(`http://localhost:5000/api/v1/agreement/new`, data, {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
          })
          .then((response)=> {
               
              alert("send agreement request successfully")
              axios.post(`http://localhost:5000/api/v1/exchange_request/update`, data, {
                headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
                }
                })
                .then((response)=> {
                    this.setState({update:true})
                })
            
           
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    
    

    render(){

        if (this.state.update ===true){
            return <Redirect to='/Dashboard/ExchangeRequestList'/>
          } else {


              
              return(
                 <div>
                     <h1>Choose An Item To Exchange</h1>
      
                      <Row>
                          {
                              this.state.items.map((item,index)=>{
                              
                              return(
                              
                              
                                  
                                  
                                  <Col sm='3' key={index} className={"mt-5"}>
                                      <Card>
                                      <CardBody className="itemname">
                                          <CardTitle>
                                         
                                          {item.name}<br/>
                                          </CardTitle>
                                      </CardBody>
                                      <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images' />
                                      <CardBody>
                                          <div className="itemtag">
                                              <CardText>
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
                                          <button onClick={()=>this.chooseItem(item.id)}>CHOOSE</button>
      
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
}

export default ChooseItem