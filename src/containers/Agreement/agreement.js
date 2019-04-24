import React from "react";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";




class Agreement extends React.Component{


    state={
        agreement_requests:[],
        history:false,
        approved_requests:[]
        
    }


    componentDidMount(){
        this.fetchAgreementRequests()
        this.fetchApprovedRequests()
      }


    fetchAgreementRequests=()=>{
    axios( {
        url: `http://localhost:5000/api/v1/agreement/show`,
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
        method: "get"
    })
    .then((response)=>{

        
        
        this.setState({
        agreement_requests: response.data.agreement_request
        
       
        })
        
    })
    .catch( (error)=> {
        console.log(error);
    });
    }



    fetchApprovedRequests=()=>{
        axios( {
            url: `http://localhost:5000/api/v1/agreement/exchange_history/show`,
            headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
            method: "get"
        })
        .then((response)=>{
            
            this.setState({
            approved_requests: response.data.agreement_request
            
           
            })
            
        })
        .catch( (error)=> {
            console.log(error);
        });
    }



    approve=(wanted_item_id,owner_id,give_item_id, money)=>{
        const data ={
            wanted_item_id:wanted_item_id,
            owner_id:owner_id,
            give_item_id:give_item_id,
            money:money
        }
        
        axios.post(`http://localhost:5000/api/v1/agreement/approval/update`, data, {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
        })
        .then((response)=> {

                axios.post(`http://localhost:5000/api/v1/exchange_request/approval/update`, data, {
                headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
                }
            })
            .then((response)=>{
                alert('Exchange successfully!')
                this.fetchAgreementRequests()
      
            })
            
                
     
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    reject=(wanted_item_id,owner_id,give_item_id,user_id, money )=>{
        const data ={
            wanted_item_id:wanted_item_id,
            owner_id:owner_id,
            give_item_id:give_item_id,
            money:money
        }

        // const e ={
        //     user_id:user_id,
        //     wanted_item_id:wanted_item_id,
        //     // give_item_id:give_item_id
        //   }

        axios.post(`http://localhost:5000/api/v1/agreement/delete`, data, {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
        })
        .then((response)=> {

            this.fetchAgreementRequests()
            // axios.post(`http://localhost:5000/api/v1/exchange_request/reject_request`, e, {
            //     headers: {
            //       "Authorization": "Bearer " + localStorage.getItem("JWT")
            //     }
            //   })
            //   .then((response)=> {
                   
                //    this.fetchAgreementRequests()
                
               
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
                
        })
        .catch(function (error) {
            console.log(error);
        });

    }


    showHistory= () =>{
        this.setState({history:true})
        this.fetchApprovedRequests()
    }

    closeHistory=()=>{
        this.setState({history:false})
        this.fetchAgreementRequests()
    }





    render(){
       
        if (this.state.history ===true){
            return(
                <div>

                    <h1>Exchange History</h1>
                    <br></br>
                    <button onClick={this.closeHistory} >Agreement List</button>

                    {
                        this.state.approved_requests.map((approved_request,index)=>{
                        
                        return(
                        
                            <Row key={index}  className="mt-5" style={{border:"2px solid black"}}>
    
    
                                <Col sm='4' className="mt-" key={approved_request.wanted_item_id}>
                                    <Card>
                                    <CardBody className="itemname">
                                        <CardTitle>
                                        EXCHANGE ITEM
                                        </CardTitle>
                                    </CardBody>
                                    <img width="100%" src={approved_request.wanted_item_filename} alt='temparaly images' />
                                    <CardBody>
                                        <div className="itemtag">
                                            <CardText>
                                                
                                                {approved_request.wanted_item_tag_parent}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemtag">
                                            <CardText>
                                                {approved_request.wanted_item_tag_children}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemdescription">
                                            <CardText>
                                                {approved_request.wanted_item_name}
                                            </CardText>
                                        </div>
                                        
                                    
                                        
                                    </CardBody>
                                    
                                    </Card>
                                </Col>
                                <Col sm='4'>
    
                                <h1>EXCHANGE SUCCESSFULLY</h1>
                                
                                </Col>
                                {
                                    approved_request.money===null
                                   ?<Col sm='4' className="mt-" key={approved_request.give_item_id}>
                                    <Card>
                                    <CardBody className="itemname">
                                        <CardTitle>
                                        GIVE OUT ITEM
                                        </CardTitle>
                                    </CardBody>
                                    <img width="100%" src={approved_request.give_item_file} alt='temparaly images' />
                                    <CardBody>
                                        <div className="itemtag">
                                            <CardText>
                                                
                                                {approved_request.give_item_tag_parent}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemtag">
                                            <CardText>
                                                {approved_request.give_item_tag_children}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemdescription">
                                            <CardText>
                                                {approved_request.give_item_name}
                                            </CardText>
                                        </div>
                                    
    
                                    
                                    </CardBody>
        
                                    </Card>
                                    </Col>
                                   :<Col sm='4' className="mt-" >

                                    <h1>RM{approved_request.money}</h1>
                               
                                    </Col>
                                }
                            </Row>
    
    
                                
                        
                        
                        )
                        })
                    }




                </div>




            )
          } else {
            return(
                <div>
                    <h1>Agreement requests</h1>
                    <br/>
                    <button onClick={this.showHistory}>exchange history</button>
    
    
                    {/* <Row> */}
                    {
                        this.state.agreement_requests.map((agreement_request,index)=>{
                        
                        return(
                        
                            <Row key={index}  className="mt-5" style={{border:"2px solid black"}}>
    
    
                                <Col sm='4' className="mt-" key={agreement_request.wanted_item_id}>
                                    <Card>
                                    <CardBody className="itemname">
                                        <CardTitle>
                                        EXCHANGE ITEM
                                        </CardTitle>
                                    </CardBody>
                                    <img width="100%" src={agreement_request.wanted_item_filename} alt='temparaly images' />
                                    <CardBody>
                                        <div className="itemtag">
                                            <CardText>
                                                
                                                {agreement_request.wanted_item_tag_parent}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemtag">
                                            <CardText>
                                                {agreement_request.wanted_item_tag_children}<br/>
                                            </CardText>
                                        </div>
                                        <div className="itemdescription">
                                            <CardText>
                                                {agreement_request.wanted_item_name}
                                            </CardText>
                                        </div>
                                        
                                    
                                        
                                    </CardBody>
                                    
                                    </Card>
                                </Col>
                                <Col sm='4'>
    
                                <h1>EXCHANGE WITH</h1>
                                <br>
                                </br>
                                <button onClick={()=>this.approve(agreement_request.wanted_item_id,agreement_request.owner_id,agreement_request.give_item_id, agreement_request.money)}>Agree</button>
                                <br>
                                </br>
                                <button onClick={()=>this.reject(agreement_request.wanted_item_id,agreement_request.owner_id,agreement_request.give_item_id, agreement_request.user_id, agreement_request.money)}>Reject</button>
                                </Col>

                                {
                                    agreement_request.money===null
                                    ?<Col sm='4' className="mt-" key={agreement_request.give_item_id}>
                                        <Card>
                                        <CardBody className="itemname">
                                            <CardTitle>
                                            GIVE OUT ITEM
                                            </CardTitle>
                                        </CardBody>
                                        <img width="100%" src={agreement_request.give_item_filename}alt='temparaly images' />
                                        <CardBody>
                                            <div className="itemtag">
                                                <CardText>
                                                    
                                                    {agreement_request.give_item_tag_parent}<br/>
                                                </CardText>
                                            </div>
                                            <div className="itemtag">
                                                <CardText>
                                                    {agreement_request.give_item_tag_children}<br/>
                                                </CardText>
                                            </div>
                                            <div className="itemdescription">
                                                <CardText>
                                                    {agreement_request.give_item_name}
                                                </CardText>
                                            </div>
                                            
            
                                            
                                        </CardBody>
            
                                        </Card>
                                        </Col>
                                    :<Col sm='4' className="mt-" key={agreement_request.give_item_id}>

                                        <h1>RM{agreement_request.money}</h1>
                                    
                                     </Col>

                                } 
                                
                                
                                
                            </Row>
    
    
                                
                        
                        
                        )
                        })
                    }
                    {/* </Row> */}
    
    
                </div>
            )
          }
        
    }
}

export default Agreement;