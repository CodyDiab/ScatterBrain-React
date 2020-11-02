import React,{useState} from 'react';
import Auth from '../utils/auth';

// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';

import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const Login = () => { 
   
  const [signUp,toggleSignUp] = useState(true);


   if(signUp) {
    return (
      <>
     <SignupForm/>
     <button onClick={toggleSignUp(false)}>Or Login</button>
     </>
    )

    }else{
    return(
      <LoginForm/>
    )
    }
}

export default Login;