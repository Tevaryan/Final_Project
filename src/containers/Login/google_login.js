import React, {Component} from 'react';
import { Redirect } from "react-router-dom"
import GoogleLogin from 'react-google-login';
import axios from 'axios';
 
class ResponseGoogle extends Component {
  state = {
    isLogin: false
  }

  responseGoogle=(response)=>{
      axios.post("http://localhost:5000/api/v1/auth/callback", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...response
      })
    }).then((response) => {
      console.log(response)
      if (response.data.status === 'success') {
        localStorage.setItem('user_id', response.data.user.id)
        localStorage.setItem('JWT', response.data.access_token)
        localStorage.setItem('username', response.data.user.username)
        localStorage.setItem('destination',response.data.user.destination)
        localStorage.setItem('location', response.data.user.location)
        localStorage.setItem('profile_picture', response.data.user.profile_picture)
        this.setState({
          isLogin: true
        })
      } else {
        this.setState({
          errorMessage: response.data.msg
        })
      }
    })
  }

  responseError= (resp) => {
    console.log(resp)
  }

  render(){
    if (this.state.isLogin === false) {
      return(
        <>
          <GoogleLogin
          clientId="494882721260-h0fgefbdt6ar1utd0d5oboffkeuf35d6.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseError}
          cookiePolicy={'single_host_origin'}
          />
        </>
      )
    } else {
      return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
    }
  }
}

export default ResponseGoogle