import React from 'react';
import FacebookLogin from 'react-facebook-login';
import  {FacebookAppId,GOOGLE_CLIENT_ID} from "../../appConfig"
import { GoogleLogin } from 'react-google-login'
const onSuccessSocialLogin = (response) => {
  console.log(response);
}
const onRejectSocialLogin = (response) => {
    console.log(response);
  } 




function LogInGoogle(){
  return  <GoogleLogin
  className="googlecss"
  theme="dark"
   clientId={GOOGLE_CLIENT_ID}
   buttonText="Login with Google"
   onSuccess={onSuccessSocialLogin}
   onFailure={onRejectSocialLogin}
   cookiePolicy={'single_host_origin'}
 /> 
}
   



export default LogInGoogle
 