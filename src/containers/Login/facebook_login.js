import React,{Component} from 'react';
import { Redirect } from "react-router-dom"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../../components/css/loginbutton.css"
import LoginButton from "../../assets/images/facebook.jpg"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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
        localStorage.setItem('user_id', data.user.id)
        localStorage.setItem('JWT', data.access_token)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('destination',data.user.destination)
        localStorage.setItem('location', data.user.location)
        localStorage.setItem('profile_picture', data.user.profile_picture)
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
        <div>
          <FacebookLogin
          appId="1059436517582741"
          autoLoad={false}
          callback={this.responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick} style={{borderRadius: "25px", width: '100%'}} className="facebook">Login with Facebook</button>
          )}
          />
        </div>
        

      )
    } else {
      return <Redirect to='/Dashboard/TradeMain/MyFeed'/>
    } 
  }
}


export default ResponseFacebook