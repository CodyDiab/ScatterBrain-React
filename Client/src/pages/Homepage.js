import React from "react";


const Homepage = () => {
    return (
<div className="home">
<header>
          
          <div className="heading-logo">
          <h1 className="heading">ScatterBrain<img className="logo" src={require("../assets/logoscatterbrain.svg")} type="image/svg+xml" alt=""></img></h1>
          </div>
        
       
         
    <div className="util-container">
      <nav className="buttons-container">
              
             <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect " title="Add a Subject" id="add-subject">
               <i className="material-icons">add</i>
            </button> 
      
               <button id="logout" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect " title="Log Out">
              <i className="material-icons">logout</i>
           </button>
            
      </nav>
             
    </div>
</header>
        <main className="field">
            <h3>This is where the users subjects will go</h3>
       </main>
    
    
      
      
</div>
    
    
    
      
      
    
    )
}

export default Homepage;