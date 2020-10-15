import React from 'react';


const Login = () => { 

    return (
<div className="login-splash">
    <div className="title-login">
        <h1 className="main-title">ScatterBrain 
        <img className="logo" scr={require("../assets/logoscatterbrain.svg")} type="image/svg+xml" alt="logo"></img>
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
      <form className="signup-form form">
        <div>
         
          <input type="text" id="username-signup" placeholder="Username" ></input>
        </div>
        <div>
          
          <input type="text" id="email-signup" placeholder="Email"></input>
        </div>
        <div>
         
          <input type="password" id="password-signup" placeholder="Password" ></input>
        </div>
        <div>
            <input type="submit"className="fadeIn fourth" value="Sign Up"></input>
        </div>
      </form>
    </div>
</div>
    )

}

export default Login;