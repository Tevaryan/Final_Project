import React,{Component} from 'react';
import { Redirect } from "react-router-dom"
import FacebookLogin from 'react-facebook-login';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ResponseFacebook extends Component {
  state = {
    isLogin: false
  }

  responseFacebook=(response)=>{
      fetch("http://localhost:5000/api/v1/auth/callback/facebook", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...response
      })
    }).then((response)=>{
      return response.json()
    }).then((data) => {
      if (data.status === 'success') {
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('profileImage', data.user.profile_picture)
        localStorage.setItem('user-id', data.user.id)
        localStorage.setItem('JWT', data.access_token)
        this.setState({
          isLogin: true
        })
      } else {
        this.setState({
          errorMessage: data.msg
        })
      }
    })
  }

  responseError= (resp) => {
    console.log(resp)
  }
 

  render() {
    if (this.state.isLogin === false) {
      return(
        <>
          <FacebookLogin
          appId="1059436517582741"
          textButton =" Login with Facebook"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          // icon={<FontAwesomeIcon icon={['fab', 'facebook']} size="1x" color="blue"/>}
          />
        </>
      )
    } else {
      return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
    } 
  }
}


export default ResponseFacebook