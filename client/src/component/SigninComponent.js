  import { signin, autheticate, isAuth } from "../action/authAcation";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Protected from "./private/Protected";
// import tejas from "../pages/tejas";

const SigninComponent = ({ history }) => {
  
  // const [isAuth2 , setIsAuth]=useState({isAuth2})
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.table({ name, email, password, error, loading, message, showForm });

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      try {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          //save user token to cookie
          //save user info to localStroage
          //authenticate user
          autheticate(data, () => {
            if (isAuth() && isAuth().role === 1) {
              history.push("/admin");
            } else {
              history.push("/user");
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLaoding = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signinForm = () => {
    return (
      <div className="App">
        <style>{'body { background-color: #b06ab3; }'}</style>
       
          <form onSubmit={handleSubmit}>
          <div className="container_signin">

            <div className="heading">
              <b>Sign in</b>
            </div>
            <div className="signin-content">

            <label for="inp" class="inp" style={{marginTop: "50px"}}>
              <input type="text" id="inp" placeholder="&nbsp;" onChange={handleChange("email")} />
              <span class="label">Email</span>
              <span class="focus-bg"></span>
            </label>


            {/* <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="input_signin_name"
              placeholder="Type your email"
            /> */}

            <br />

            <label for="inp" class="inp" style={{marginTop: "100px"}}>
              <input type="password" id="inp" placeholder="&nbsp;" onChange={handleChange("password")} />
              <span class="label">Password</span>
              <span class="focus-bg"></span>
            </label>


            {/* <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="input_signin_pass"
              placeholder="Type your password"
            /> */}
          
          <button className="button_signin" >SignIn</button>
          </div>
            <div className="signinImg">

            </div>
            </div>
          </form>
        
      </div>
    );
  };

  return (
    <div className="container">
      {showLaoding()}
      {showError()}
      {showMessage()}
      {showForm && signinForm()}
    </div>
  );
};

export default withRouter(SigninComponent);











