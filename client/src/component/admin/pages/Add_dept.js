import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Add_dept  = () => {
    const [dept_name, setdeptName] = useState("");
    const changeOnClick = e => {
        e.preventDefault();


        const dept  = {
         dept_name,

            

        }

       axios.post("http://localhost:8000/dept/add", dept)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
       

    };
   
    return (
        <div className="regi_form">
            <label className="add_sche_head">Training Registration</label><br/>
          

            <form className="input-section" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="fi_title"><label className="add_schedule">Company Registration</label></div>
                <div className="form-group">
                  
                    <input type="text"
                        onChange={e => setdeptName(e.target.value)}
                        className="input_form" id="dept_name" aria-describedby="dept_name" placeholder="Enter dept Name" autoComplete="off" />

                </div><br/>
                
                
                <button type="submit" className="button_add">Submit</button>
            </form>

        </div>
    )
}

export default Add_dept;
