import React from "react";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardText,Input} from "reactstrap";
import {Link} from "react-router-dom";

class ExchangeRequestList extends React.Component {

    state={
        exchange_requests:[],
        // setAmountModal:false,
        money:""


        
    }


    componentDidMount(){
        this.fetch()
      }


    fetch=()=>{
    axios( {
        url: `http://localhost:5000/api/v1/exchange_request/show`,
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
        method: "get"
    })
    .then((response)=>{
        
        this.setState({
        exchange_requests: response.data.exchange_request
        
       
        })
        
    })
    .catch( (error)=> {
        console.log(error);
    });
    }

    delete = (user_id, wanted_item_id) =>{

        const data ={
            user_id:user_id,
            wanted_item_id:wanted_item_id,
            // give_item_id:give_item_id
          }
          axios.post(`http://localhost:5000/api/v1/exchange_request/reject_request`, data, {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
          })
          .then((response)=> {
               
               this.fetch()
            
           
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    // setAmountModal=()=>{
    //     this.setState({setAmountModal:true})
    // }

    moneyInputHandler =(event)=>{
        this.setState({money:event.target.value})
        }

    setAmount = (user_id, wanted_item_id) =>{

        const data ={
            user_id:user_id,
            wanted_item_id:wanted_item_id,
            money:this.state.money
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
                    this.fetch()
                })
            
            
            })
            .catch(function (error) {
            console.log(error);
            });

    }



    render(){
        return(

    <div>

    <Row>
      {
        this.state.exchange_requests.map((exchange_request,index)=>{
            

        // if(this.state.setAmountModal === true){
        //     return(
        //         <Col sm='3' className="mt-5" key={index}>

        //         <h1>Its work</h1>
        //         </Col>
        //     )
        // }

            return(
            

            
            
                <Col sm='3' className="mt-5" key={index}>
                    <Card>
                    <CardBody className="itemname">
                        <CardTitle>
                        {exchange_request.item_name}
                        </CardTitle>
                    </CardBody>
                    <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images' />
                    <CardBody>
                        <div className="itemtag">
                            <CardText>
                                
                                {exchange_request.item_tag_parent}<br/>
                            </CardText>
                        </div>
                        <div className="itemtag">
                            <CardText>
                                {exchange_request.item_tag_children}<br/>
                            </CardText>
                        </div>
                        <div>
                            <CardText>
                                Request by <Link to={`/Dashboard/Item/${exchange_request.user_id}`}>{exchange_request.user_name}</Link>
                                <button>message</button>
                                <br/>
                            </CardText>
                        </div>
                    
                        {
                            exchange_request.give_item_id===null && exchange_request.money===null
                            ?<div>
                                <div>
                                    <CardText>
                                        {/* <Link to={{pathname:`/Dashboard/SetAmount`,state:{wanted_item_id:exchange_request.item_id,user_id:exchange_request.user_id}}}><button>Exchange with money</button></Link> */}
                                        <span>Amount:</span><Input type="text" styl={{width:"10%"}} onChange={this.moneyInputHandler}/><button onClick={()=>this.setAmount(exchange_request.user_id, exchange_request.item_id)}>Exchange with money</button>
                                    </CardText>
                                </div>
                                <div>
                                    <CardText>
                                        <Link to={{pathname:`/Dashboard/ChooseItem/${exchange_request.user_id}`,state:{wanted_item_id:exchange_request.item_id,user_id:exchange_request.user_id}}}><button>Exchange with item</button></Link>
                                    </CardText>
                                </div>
                                <div>
                                    <CardText>
                                        <button onClick={()=>this.delete(exchange_request.user_id, exchange_request.item_id)}>Reject</button>
                                    </CardText>
                                </div>
                                </div>
                            :<span>agreement pending...</span>
                        }
                        
                        
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

export default ExchangeRequestList;