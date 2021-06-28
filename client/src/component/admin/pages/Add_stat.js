import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import moment from "moment";
// import Datepicker from "react-datepicker";

const Add_Schedule = ({ posts_stat }) => {

    const [year, setYear ] = useState("");
    const [totalaplied, setTotalaplied] = useState("");
    const [selected, setSelected] = useState("");
    const [totalcomanies, setTotalcompanies] = useState("");
    const [department, setDepartment] = useState("");
    const [schedule, setSchedule] = useState([]);


    const deleteSchedule = id => {
        const del = axios.delete(`http://localhost:8000/stats/${id}`)
            .then(res => (res.data))
        setSchedule(schedule.filter(elem => elem._id !== id));

        if (del.status === 400) {
            window.alert("Invalid Deletion")

        } else {
            window.alert("Successfully Deleted")
            // history.push("/")
            // window.location.reload();
        }

    }


    const history = useHistory();
    const changeOnClick = e => {
        e.preventDefault();
        const schedule = {
            year,
            totalaplied,
            selected,
            totalcomanies,
            department
        }

        const res1 = axios.post("http://localhost:8000/stats/add", schedule)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        if (res1.status === 400 ) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            // history.push("/")
            // window.location.reload();
        }

    };




    return (



        <div>
            <label className="add_sche_head">Update Statastics</label><br />
            <label className="list_head">List of Schedule</label>
            <div className="Fidiv">
                <table id="emp" className="table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Aplied</th>
                            <th>Selected</th>
                            <th>Total Comanies</th>
                            <th>Department</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>



                    <tbody>{posts_stat.map((schedule, key) => {
                        return <tr key={key}>
                            <td>{schedule.year}</td>
                            <td>{schedule.totalaplied}</td>
                            <td>{schedule.selected}</td>
                            <td>{schedule.totalcomanies}</td>
                            <td>{schedule.department}</td>
                          
                            <td><button className="delete_btn" onClick={() => deleteSchedule(schedule._id)}><b>Delete</b></button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <div>
                    <ReactHTMLTableToExcel
                        className="export_btn"
                        table="emp"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText="Export to excel" />
                </div>
            </div>
{/* 

            year,
            totalaplied,
            selected,
            totalcomanies,
            department */}





            <div className="input-section">
                <div className="fi_title"><label className="add_schedule">Add Statastics</label></div>

                <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">
                    <div>
                        <div className="lable_1">


                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setYear(e.target.value)} id="year" aria-describedby="year" autoComplete="off"/>
                        <span class="label">Year</span>
                        <span class="focus-bg"></span>
                        </label>



                            {/* <label className="form_lable" htmlFor="year">Year</label><br />
                            <input type="text"
                                onChange={e => setYear(e.target.value)}
                                className="input_form" id="year" aria-describedby="year" placeholder="Enter year  " autoComplete="off" /> */}

                        </div><br />
                        <div className="lable_1">

                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setTotalaplied(e.target.value)} id="totalaplied" aria-describedby="totalaplied" autoComplete="off"/>
                        <span class="label">Total Applied</span>
                        <span class="focus-bg"></span>
                        </label>


                            {/* <label className="form_lable" htmlFor="totalaplied">Total Applied</label><br />
                            <input type="text"
                                onChange={e => setTotalaplied(e.target.value)}
                                className="input_form" id="totalaplied" aria-describedby="totalaplied" placeholder="Enter totalaplied  " autoComplete="off" /> */}

                        </div><br />
                       
                        <div className="lable_1">

                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setTotalcompanies(e.target.value)} id="totalcomanies" aria-describedby="totalcomanies" autoComplete="off"/>
                        <span class="label">Total Companies</span>
                        <span class="focus-bg"></span>
                        </label>



                            {/* <label className="form_lable" htmlFor="totalcomanies">Total Companies</label><br />
                            <input type="text"
                                onChange={e => setTotalcompanies(e.target.value)}
                                className="input_form" id="totalcomanies" aria-describedby="totalcomanies" autoComplete="off" /> */}

                        </div><br />
                        <div className="lable_1">

                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setSelected(e.target.value)} id="selected" aria-describedby="selected" autoComplete="off"/>
                        <span class="label">Selected Students</span>
                        <span class="focus-bg"></span>
                        </label>


{/* 
                            <label className="form_lable" htmlFor="selected">Selected Students</label><br />
                            <input type="text"
                                onChange={e => setSelected(e.target.value)}
                                className="input_form" id="selected" aria-describedby="selected" autoComplete="off" /> */}

                        </div><br />
                        
                        <div className="form_lable_sign">
                            <labl>Select Department</labl><span></span>
                            <select className="form_lable_sign" id="dept" name="dept" onChange={e => setDepartment(e.target.value)}>
                            <option value="CSE">CSE</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="E&TC">E&TC</option>
                            <option value="Civil">Civil</option>
                            <option value="Electrical">Electrical</option>
                            </select>
                        </div><br />
                   
            


                       

                    </div>

                    <button type="submit" className="button_add">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Add_Schedule;
