import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../action/authAcation";
import { withRouter } from "react-router-dom";
import '../App.css';
import axios from 'axios'
const SignUpComponet = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phno: "",
    dept: "",
    year: "",
    c_id: "",
    password: "",
    cpassword: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, phno,dept,year,c_id, password, cpassword, error, loading, message, showForm } = values;
  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, phno,  dept,year,c_id, password, cpassword, error, loading, message, showForm });

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, phno,dept,year,c_id, password, cpassword };

    try {
      signup(user).then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
            console.log("server error");
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              phno: "",
              dept:"",
              year:"",
              c_id:"",
              password: "",
              cpassword: "",
              error: "",
              loading: false,
              message: data.message,
              showForm: false,
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  };

  const sendtodept=()=>{
    const user={
      name,email,dept,year,c_id     
    }
 axios.put("http://localhost:8000/dept/update1", user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
  }

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLaoding = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <div className="App">
        <style>{'body { background-color: #b06ab3; }'}</style>

          <form onSubmit={handleSubmit}>
          <div className="container1">

            <div className="heading">
              <b>Sign up</b>
            </div>
            <div className="signup-content">


            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" value={name} onChange={handleChange("name")} />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>

            
              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="name">Enter Name</label>
              <input
                className="input_signup"
                value={name}
                onChange={handleChange("name")}
                type="text"              
              />
              </div> */}
              
              <br/>


            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" value={email} onChange={handleChange("email")} />
              <span class="label">Email</span>
              <span class="focus-bg"></span>
            </label>



              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="email">Enter Email</label>
              <input
                className="input_signup"
                value={email}
                onChange={handleChange("email")}
                type="email"
              />
              </div> */}
              <br />

              <div className="form_lable_sign" >
              <span></span><label classname="form_lable_sign" htmlFor="dept">Select Department</label><span></span><br/>
              <span></span><select className="form_lable_sign" id="dept" name="dept" onChange={handleChange("dept")} value={dept}>
                <option value="CSE">CSE</option>
                <option value="Mechanical">Mechanical</option>
                <option value="E&TC">E&TC</option>
                <option value="Civil">Civil</option>
                <option value="Electrical">Electrical</option>
              </select>
              </div><br/>

              <div className="form_lable_sign" >
              <span></span><label classname="form_lable_sign" htmlFor="year">Select Year</label><span></span><br/>
              <span></span><select className="form_lable_sign" id="year" name="year" onChange={handleChange("year")} value={year}>
                <option value="FY">First Year</option>
                <option value="SY">Second Year</option>
                <option value="TY">Third Year</option>
                <option value="BTech">Final Year</option>
              </select>
              </div>
              <br/>


            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" value={c_id} onChange={handleChange("c_id")} />
              <span class="label">College ID</span>
              <span class="focus-bg"></span>
            </label>



              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="name">Enter College ID</label>
              <input
                className="input_signup"
                value={c_id}
                onChange={handleChange("c_id")}
                type="text"
              />
              </div> */}
              
              <br />


              <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" value={phno} onChange={handleChange("phno")} />
              <span class="label">Mobile No.</span>
              <span class="focus-bg"></span>
            </label>



              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="name">Enter Mobile no.</label>
              <input
                className="input_signup"
                value={phno}
                onChange={handleChange("phno")}
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required
                placeholder="Enter mobile no."
                // placeholder="123-123-1234"
              /> 
              </div>
               */}
              <br />


              <label for="inp" class="inp">
              <input type="password" id="inp" placeholder="&nbsp;" value={password} onChange={handleChange("password")} />
              <span class="label">Password</span>
              <span class="focus-bg"></span>
            </label>


              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="name">Enter Password</label>
              <input
                className="input_signup"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
              </div> */}
              <br />

              <label for="inp" class="inp">
              <input type="password" id="inp" placeholder="&nbsp;" value={cpassword} onChange={handleChange("cpassword")} />
              <span class="label">Confirm Password</span>
              <span class="focus-bg"></span>
            </label>


              {/* <div className="lable_1">
              <span></span><label classname="form_lable" htmlFor="name">Confirm Password</label>
              <input
                className="input_signup"
                value={cpassword}
                onChange={handleChange("cpassword")}
                type="password"
              />
              </div> */}
              <br />


              <button type="submit" className="button_signup" onClick={sendtodept}>
                SignUp
          </button>

            </div>
            <div className="signupImg">

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
      {showForm && signupForm()}
    </div>
  );
};

export default withRouter(SignUpComponet);























