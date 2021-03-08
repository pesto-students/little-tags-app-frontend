import React from 'react';
import FacebookLogin from 'react-facebook-login';
import  {FacebookAppId,GOOGLE_CLIENT_ID} from "../../appConfig"
import { GoogleLogin } from 'react-google-login'
const onSuccessSocialLogin = (response) => {
  
}
const onRejectSocialLogin = (response) => {
    console.log(response);
  } 

function socialLogin(props){
const FbLogin=()=>{
  return  <FacebookLogin
  appId={FacebookAppId}
  autoLoad={true}
  fields="name,email,picture"
  callback={onSuccessSocialLogin}
  cssClass="my-facebook-button-class"
  icon={<i class="fab fa-facebook"></i>}
/>   
}

const LogInGoogle=()=>{

  return  <GoogleLogin
   clientId={GOOGLE_CLIENT_ID}
   buttonText="Login"
   onSuccess={onSuccessSocialLogin}
   onFailure={onRejectSocialLogin}
   cookiePolicy={'single_host_origin'}
 /> 
}

  return <>
  { FbLogin()}
  <div className="pT2">
  { LogInGoogle()
  }
  </div>
  </> 
}    



export default socialLogin
 