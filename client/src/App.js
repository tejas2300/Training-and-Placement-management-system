import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/sidebar/Header";
import SignUP from "./component/SignUp";
import SignIn from "./component/SignIn";
import HomeAdmin from "./component/admin/index";
import Students from "./component/admin/pages/students";
import HomeUser from "./component/user/index";
import Addcompanies from "./component/admin/pages/Add_companies";
import './App.css';
import Home from "./component/Home";
import Footer from "./component/Footer";

// import Faculties from "./component/user/pages/Faculties";
import CompanyU from "./component/user/pages/Company";
import Select_company from "./component/user/pages/Select_company";
import Company_reg from "./component/admin/pages/Company_reg";
import Fill_marks from "./component/admin/pages/Fill_marks";
import Results from "./component/user/pages/Results";
import Schedule from "./component/user/pages/Schedule";
import Add_Schedule from "./component/admin/pages/Add_schedule";
import Add_training from "./component/admin/pages/Add_training";
import Add_dept from "./component/admin/pages/Add_dept";
import Training from "./component/user/pages/Training";
import AllStudents from "./component/admin/pages/AllStudents";
import Add_Stat from "./component/admin/pages/Add_stat";
import Statistics from "./component/user/pages/Statistics";
import Bar from "./component/user/pages/Bar";
function App() {
  const [posts, setposts] = useState([]);
  const [posts_students, setposts_student] = useState([]);
  const [posts_company, setposts_company] = useState([]);
  const [posts_schedule , setposts_schedule] = useState([]);
  const [posts_training , setposts_training] = useState([]);
  const [posts_stat , setposts_stat] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then(res => setposts(res.data))
      .catch(error => console.log(error));
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8000/dept")
      .then(res => setposts_student(res.data))
      .catch(error => console.log(error));
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8000/company")
      .then(res => setposts_company(res.data))
      .catch(error => console.log(error));
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8000/schedule")
      .then(res => setposts_schedule(res.data))
      .catch(error => console.log(error));
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8000/training")
      .then(res => setposts_training(res.data))
      .catch(error => console.log(error));
  }, [])


  useEffect(() => {
    axios.get("http://localhost:8000/stats")
      .then(res => setposts_stat(res.data))
      .catch(error => console.log(error));
  }, [])


  return (
    <>
<div>
<Header />

    <div className="App">
     
        
        
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignUP} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/admin" component={HomeAdmin} exact />
          <Route path="/results" component={Results} exact />
          <Route path='/students' render={() => <Students posts_students={posts_students} />} />


          <Route path='/companyu' render={() => <CompanyU posts_company={posts_company} />} />
          <Route path='/schedule' render={() => <Schedule posts_schedule={posts_schedule} />} />
          <Route path='/add_schedule' render={() => <Add_Schedule posts_schedule={posts_schedule} />} />
          <Route path='/addcompany' render={() => <Addcompanies posts_company={posts_company} />} />
          <Route path='/add_training' render={() => <Add_training posts_training={posts_training} />} />
          <Route path='/add_dept' render={() => <Add_dept posts_training={posts_training} />} />
          <Route path='/training' render={props => <Training  {...props} posts_training={posts_training} />} />
          <Route path='/statistics' render={props => <Statistics {...props} posts_stat={posts_stat} />} />
          <Route path='/bar/:id' render={props => <Bar {...props} posts_stat={posts_stat} />} />
          <Route path='/add_stat' render={() => <Add_Stat posts_stat={posts_stat} />} />


          <Route path='/select_company/:id' render={props => <Select_company {...props} posts_company={posts_company} />} />
          <Route path='/company_reg/:id' render={props => <Company_reg {...props} posts={posts} />} />
          <Route path='/fill_marks/:id/:id2' render={props => <Fill_marks {...props} posts_company={posts_company} />} />
          <Route path='/allstudents/:id' render={props => <AllStudents {...props} posts_students={posts_students} />} />

          <Route path="/user" component={HomeUser} exact />
          {/* <Route path="/addcompany" component={Addcompanies} exact /> */}
          {/* <Route path='/faculties' render={() => <Faculties posts={posts} />} /> */}
        
        </Switch>
     
        <Footer/>
        

    </div>
    
    </div>
    </>
  );
}

export default App;
