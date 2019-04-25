import React from "react";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardText,Input, Button} from "reactstrap";
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

    <div style={{backgroundColor:"#202c38", minHeight:"120vh"}}>

    <Row >
      {
        this.state.exchange_requests.map((exchange_request,index)=>{
           let link = '/message/' + exchange_request.user_id

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
                    <CardBody className="itemname" style={{height:"5px"}}>
                        <CardTitle>
                        {exchange_request.item_name}
                        </CardTitle>
                    </CardBody>
                    <img width="100%" src={exchange_request.item_filename}alt='temparaly images' />
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
                            <CardText tag="strong">
                                Request by {exchange_request.user_name}<br></br>
                                
                                <Link to={{pathname:{link},
                            state:{
                                profile_image: exchange_request.user_profile_image,
                                username: exchange_request.user_name,
                                // item_name:this.props.item.item_name,
                                // description:this.props.item.description
                            }}}
                        ><Button className="btn-warning mt-2">Contact Owner</Button></Link>
                                <br/>
                            </CardText>
                        </div>
                    
                        {
                            exchange_request.give_item_id===null && exchange_request.money===null
                            ?<div>
                                <div>
                                    <CardText className="mt-3">
                                        {/* <Link to={{pathname:`/Dashboard/SetAmount`,state:{wanted_item_id:exchange_request.item_id,user_id:exchange_request.user_id}}}><button>Exchange with money</button></Link> */}
                                        <strong>Amount(RM):</strong><Input type="text" styl={{width:"10%"}} onChange={this.moneyInputHandler}/><Button className="btn-success mt-3" onClick={()=>this.setAmount(exchange_request.user_id, exchange_request.item_id)}>Exchange with money</Button>
                                    </CardText>
                                </div>
                                <div>
                                    <CardText>
                                        <Link to={{pathname:`/Dashboard/ChooseItem/${exchange_request.user_id}`,state:{wanted_item_id:exchange_request.item_id,user_id:exchange_request.user_id}}}><Button className="btn-success mt-3">Exchange with item</Button></Link>
                                    </CardText>
                                </div>
                                <div>
                                    <CardText>
                                        <Button className="btn-danger mt-3" onClick={()=>this.delete(exchange_request.user_id, exchange_request.item_id)}>Reject</Button>
                                    </CardText>
                                </div>
                                </div>
                            :<strong  className="mt-5" style={{color:"red"}}>AGREEMENT PENDING...</strong>
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