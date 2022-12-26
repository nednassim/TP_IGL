import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";




function App() {

  const hello = async (response) => {
    let res = await axios.get("http://127.0.0.1:8000/agence-api");
    console.log(res)
  }
  hello()
  const googleLogin = async (response) => {
    let res = await axios.post(
      "http://127.0.0.1:8000/rest-auth/google",
      {
        access_token: response.accessToken,
      }
    );
    console.log(res);
    return await res.status;
  };

  const clientId = '544526967745-km79kh0b3ekuo3a22jr0o0k8gc6ajabt.apps.googleusercontent.com'

  useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
  });


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.accessToken == response.tokenObj.access_token)
  }
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <GoogleLogin
        clientId="544526967745-km79kh0b3ekuo3a22jr0o0k8gc6ajabt.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={googleLogin}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        accessType="offline"
        prompt='consent'
        responseType="permission" // use this to get refresh token\
        redirectUri="http://127.0.0.1:8000/agence-api"
      />
      
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;