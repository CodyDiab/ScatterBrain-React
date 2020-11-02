import React from 'react'

const LoginForm = () => { 
   
  
  
      return (
  <div className="login-splash">
      <div className="title-login">
          <h1 className="main-title">ScatterBrain 
          <img className="logo" src={require("../assets/logoscatterbrain.svg")} type="image/svg+xml" alt=""></img>
          </h1>
      </div>
      <div className="form-container">
    
      <form className="login-form form">
          <div>
           
            <input type="text" id="email-login" placeholder="Email" ></input>
          </div>
          <div>
           
            <input type="password" id="password-login" placeholder="Password"></input>
          </div>
          <div>
              <input type="submit"className="fadeIn fourth" value="Log In"></input>
          </div>
        
        </form>
       
      </div>
  </div>
      )
  
  }
  
  export default LoginForm;