import React, { useState } from 'react';
import './index.css'; 

const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" name="txt" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello!</h1>
            <p>Enter your details to start your journey with us</p>
            <button id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
