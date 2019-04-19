import React from "react"
import axios from 'axios'
import {Row,Badge,Col} from 'react-bootstrap'
import { Link } from "react-router-dom"
import Notification from '../notification/notification'
import LatestMessage from '../LatestMessage/LatestMessage'

class MessageList extends React.Component {
  state = {
    users: []
  } 

  componentDidMount() {
    if(localStorage.getItem("JWT")) {
      axios.get('http://localhost:5000/api/v1/message/show', {
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("JWT")
        },
      }).then((result) => {
        // console.log( result)
        this.setState({
            users: result.data
        })
      })
    }
  }

    render(){
        let list = this.state.users.map((conv,index) =>{ 
          let path = '/Dashboard/message/' + conv.user_id
          return(
            <li key={index}>
                <Row style={{borderBottom: '1px solid #DEDEDE',height: '50px'}}>
                  <Col>
                    <img className="rounded-circle" style={{height: '50px', padding: '5px'}} src={conv.picture} alt="user_profile_image"/>
                     <Link to={{pathname: path,state: {profile_image: conv.picture, username: conv.username}}}>{conv.username}</Link>     
                  </Col>
                  <Col className="m-auto">
                    <LatestMessage id={conv.user_id}/>
                  </Col>
                  <Col className="text-right m-auto">
                      <Link to={{pathname: path,state: {profile_image: conv.picture, username: conv.username}}}>
                      <Badge pill variant="primary"><Notification id={conv.user_id}/></Badge>
                        <span className="sr-only">unread messages</span>
                      </Link>
                  </Col>             
                </Row>  
            </li>
          )
      })

        return(
            <div 
            style={{padding: '10px',textDecoration: 'none',margin: 'auto',width:'80%'}}
            >
                <ul
                 style={{listStyleType: 'none', border: '1px solid black', padding: '0px 20px'}}
                 >
                    {list}                  
                </ul>
            </div>
        )
    }
}

export default MessageList