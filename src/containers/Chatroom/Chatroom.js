import React from "react"
import io from 'socket.io-client'
import {Row,Col} from 'react-bootstrap'
import './Chatroom.css'
import MessageSend from './MessageSend/MessageSend'
import {
  Card, CardText,
  CardTitle
} 
from 'reactstrap';

const socket = io('http://localhost:5000')

class Messages extends React.Component {
  state = {
    messages:[],
    newMessage:'',
    user_id: localStorage.getItem("user_id"),
    partner_id: this.props.match.params.id,
    room_id:''
  } 

  
  componentDidMount () {
    //!! when user comes to this page,let user join room and activate socket
   
    this.setSocketListeners()
    socket.emit("join_room",{'user_id':this.state.user_id,'partner_id': this.state.partner_id})
  }

  componentWillUnmount(){
    let data={"room_id":this.state.room_id}
    socket.emit("leave",data)    
  }
    
  setSocketListeners = () => {
    console.log("set")

    socket.on('joined', (data) => {
      this.setState({
        room_id: data['room_id']
      })
      this.fetchMessages(data['room_id'])
    })

    socket.on("receive", (data)=>{
      this.fetchMessages(this.state.room_id)
    })
  }
  
  handleSubmit =(event)=>{
    event.preventDefault()
    console.log(this.state.newMessage)
    let data={"msg":this.state.newMessage,"room_id":this.state.room_id,"user_id":this.state.user_id}
    socket.emit("send",data)
    this.setState({
      newMessage:''
    })
  }  


  inputHandler=(event)=>{
    this.setState({
      newMessage: event.target.value
    })
  }

   fetchMessages = (room_id) => {
      if(localStorage.getItem("JWT")) {
  //todo I have to figure out way to get opponent id in url
        fetch(`http://localhost:5000/api/v1/message/show/${room_id}`, {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
          },
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          this.setState({
              messages: result
          })
        })
      }
  }

  render(){
    let current_user_id = Number(localStorage.getItem('user_id'))
    let dialog = this.state.messages.map((conv,index) =>{  
    let attachedClasses
    let outsideContainer
    let container
    let img
    let message =conv.message
    let time = conv.time.slice(0,conv.time.length-12)
    if (conv.user_id === current_user_id) {
        attachedClasses = "MyComment"
        outsideContainer = "OutsideContainerMy"
        container= "ContainerMy"
        img = localStorage.getItem('profile_picture')
    } else {
        attachedClasses ="OthersComment"
        outsideContainer = "OutsideContainerOthers"
        container= "Container"
        img = this.props.location.state.profile_image
    }

    return(
        <div className={outsideContainer} key={index}>
            <div className={container} >
                <Row>
                  <Col xs={4}>
                    <img className={attachedClasses} src={img} alt='userimage'/>
                    {/* <p>{name}</p> */}
                  </Col>
                  <Col xs={8}>
                    <p>{time}</p>
                    <p>{message}</p>
                  </Col>
                </Row>
            </div>
        </div>
    )
})
// if user come from search result page or delivery page, show a selected item on chatroom
let item;
console.log(this.props.location.state)
if(this.props.location.state.description){
  item =  
<Card body className='py-0 '>
  <CardTitle>Selected Item</CardTitle>
  <div>
    <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images'/>
  </div>
  <CardText>ownwer: {this.props.location.state.username}</CardText>
  <CardText>reward: {this.props.location.state.reward}</CardText>
  <CardText>Description:{this.props.location.state.description2}</CardText>
</Card>
} else {
  item = null
}
let img = this.props.location.state.picture? this.props.location.state.picture: this.props.location.state.profile_image
  	
      return(
          <>
          <div style={{position: 'fixed',zIndex: '100', width: '20%'}}>
                <Card body className='text-center p-0'>
                  <img src={img} className="m-auto img-fluid rounded-circle" style={{width:'80px'}}/>
                  <CardTitle>{this.props.location.state.username}</CardTitle>
                </Card>
                {item}
          </div>
            <div className="ChatSpace" >
                <MessageSend message={this.state.newMessage} input={this.inputHandler} submit={this.handleSubmit}/>
              <div style={{marginTop: '200px'}}>
                {dialog}
              </div>
          </div>
          </>
      )
    }
}

export default Messages