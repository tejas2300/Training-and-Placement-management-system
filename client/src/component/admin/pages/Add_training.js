import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Add_training  = () => {
    const [companyname, setCompanyname] = useState("");
    const [reg_date, setReg_date] = useState("");
    const [duration, setDuration] = useState("");
    const [mode, setMode] = useState("");
    const [prerequisite, setPrerequisite] = useState("");


    const history = useHistory();
    const changeOnClick = e => {
        e.preventDefault();


        const training  = {
            companyname,
            reg_date,
            duration,
            mode,
            prerequisite,

        }

        const res1 = axios.post("http://localhost:8000/training/add", training)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        if (res1.status === 400 || !companyname || !duration || !mode) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            history.push("/")

        }

    };
   
    return (
        <div className="regi_form">
            <label className="add_sche_head">Training Registration</label><br/>
          

            <form className="input-section" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="fi_title"><label className="add_schedule">Session Register</label></div>
                <div className="lable_1">


            


                <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" onChange={e => setCompanyname(e.target.value)} id="companyname" aria-describedby="companyname" autoComplete="off"/>
                <span class="label">Subject</span>
                <span class="focus-bg"></span>
                </label>

{/* 
                    <label classname="form_lable" htmlFor="companyname">Session Name</label>
                    <input type="text"
                        onChange={e => setCompanyname(e.target.value)}
                        className="input_form" id="companyname" aria-describedby="companyname" placeholder="Enter Company Name" autoComplete="off" /> */}

                </div><br/>
                <div className="lable_1">


                <label for="inp" class="inp">
                <input type="date" id="inp" placeholder="&nbsp;" onChange={e => setReg_date(e.target.value)} id="reg_date" aria-describedby="reg_date" autoComplete="off"/>
                <span class="label">Date</span>
                <span class="focus-bg"></span>
                </label>



                    {/* <label classname="form_lable" htmlFor="reg_date">Date</label>
                    <input type="date"
                        onChange={e => setReg_date(e.target.value)}
                        className="input_form" id="reg_date" aria-describedby="reg_date" placeholder="Enter date" autoComplete="off" /> */}

                </div><br/>
                <div className="lable_1">


                <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" onChange={e => setDuration(e.target.value)} id="duration" aria-describedby="duration" autoComplete="off"/>
                <span class="label">Duration</span>
                <span class="focus-bg"></span>
                </label>



                    {/* <label classname="form_lable" htmlFor="duration">Duration</label>
                    <input type="text"
                        onChange={e => setDuration(e.target.value)}
                        className="input_form" id="duration" aria-describedby="duration" placeholder="Enter duration " autoComplete="off" /> */}
                </div><br/>
                <div className="form_lable_sign">

              


                    <label classname="form_lable" htmlFor="mode" >Mode of Training</label><span></span><span/>
                    <select id="basedOn" name="base"  onChange={e => setMode(e.target.value)}>
                        <option value="Online">Online</option>
                        <option value="Classroom">Classroom</option>
                    </select>
                </div><br/>
                <div className="form_lable_sign">
                    {/* <label classname="form_lable" htmlFor="prerequisite" >Prerequisite</label> */}
                    <textarea min-row="2" column="40" 
                        onChange={e => setPrerequisite(e.target.value)}
                        className="input_form_tarea" id="prerequisite" aria-describedby="prerequisite" placeholder="Prerequisite" autoComplete="off" />
                    
                </div><br/>
                <button type="submit" className="button_add">Submit</button>
            </form>

        </div>
    )
}

export default Add_training;
