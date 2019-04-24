import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import './MessageSend.css'

const MessageSend =(props)=>(
    <div className="chatboxinputandsend">
        <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" rows="5" style={{width: "500px"}} onChange={props.input} value={props.message} />
            {/* <div className="arrowup"></div> */}
            {/* <img className="img" src={localStorage.getItem('profile_picture')} alt='userimage'/> */}
        </InputGroup>
        <div>
        <Button variant="outline-secondary" onClick={props.submit}  className="p-2 mb-4 text-center" style={{width: '150px',backgroundColor:'#edefed',}}>Send Message</Button>
        </div>
    </div>
)
export default MessageSend