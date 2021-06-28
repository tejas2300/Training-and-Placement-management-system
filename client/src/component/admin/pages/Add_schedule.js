import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from "moment";
// import Datepicker from "react-datepicker";

const Add_Schedule = ({ posts_schedule }) => {

    const [event, setEvent] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [dept, setDepartment] = useState("");
    const [venue, setVenue] = useState("");
    const [detail, setDetail] = useState("");
    const [schedule, setSchedule] = useState([]);


    const deleteSchedule = id => {
        const del = axios.delete(`http://localhost:8000/schedule/${id}`)
            .then(res => (res.data))
        setSchedule(schedule.filter(elem => elem._id !== id));

        if (del.status === 400) {
            window.alert("Invalid Deletion")

        } else {
            window.alert("Successfully Deleted")
            // history.push("/")
            window.location.reload();
        }

    }


    const history = useHistory();
    const changeOnClick = e => {
        e.preventDefault();
        const schedule = {
            event,
            date,
            time,
            dept,
            venue,
            detail,
        }

        const res1 = axios.post("http://localhost:8000/schedule/add", schedule)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        if (res1.status === 400 || !event  || !venue) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            // history.push("/")
            window.location.reload();
        }

    };




    return (



        <div>
            <label className="add_sche_head">Add Schedule Section</label><br />
            <label className="list_head">List of Schedule</label>
            <div className="Fidiv">
                <table id="emp" className="table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Department</th>
                            <th>venue</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{posts_schedule.map((schedule, key) => {
                        return <tr key={key}>
                            <td>{schedule.event}</td>
                            <td>{schedule.date}</td>
                            <td>{schedule.time}</td>
                            <td>{schedule.department}</td>
                            <td>{schedule.venue}</td>
                            <td>{schedule.detail}</td>
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








            <div className="input-section">
                <div className="fi_title"><label className="add_schedule">Add Schedule</label></div>

                <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">
                    <div>
                        <div className="lable_1">

                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="event"  onChange={e => setEvent(e.target.value)} id="event" aria-describedby="event" autoComplete="off"/>
                        <span class="label">Event</span>
                        <span class="focus-bg"></span>
                        </label>


                            {/* <label className="form_lable" htmlFor="event">Enter Event Name</label><br />
                            <input type="text"
                                onChange={e => setEvent(e.target.value)}
                                className="input_form" id="event" aria-describedby="event" placeholder="Enter Event name " autoComplete="off" /> */}

                        </div><br />
                        <div className="lable_1">

                        <label for="inp" class="inp">
                        <input type="date" id="inp" placeholder="&nbsp;" htmlFor="event"  onChange={e => setDate(e.target.value)} id="date" aria-describedby="date" autoComplete="off"/>
                        <span class="label">Date</span>
                        <span class="focus-bg"></span>
                        </label>


                            {/* <label className="form_lable" htmlFor="event">Select date</label><br />
                            <input type="date"
                                onChange={e => setDate(e.target.value)}
                                className="input_form" id="date" aria-describedby="date" autoComplete="off" /> */}

                        </div><br />
                        <div className="lable_1">


                        <label for="inp" class="inp">
                        <input type="time" id="inp" placeholder="&nbsp;" htmlFor="event" id="time" aria-describedby="time" autoComplete="off" type="time" id="appt" name="appt" min="09:00" max="18:00" required onChange={e => setTime(e.target.value)} id="date" aria-describedby="date" autoComplete="off"/>
                        <span class="label">Time</span>
                        <span class="focus-bg"></span>
                        </label>


                            {/* <label className="form_lable" htmlFor="time">Select Time</label><br />
                            
                            <input onChange={e => setTime(e.target.value)}
                                className="input_form" id="time" aria-describedby="time" autoComplete="off" type="time" id="appt" name="appt" min="09:00" max="18:00" required /> */}

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
                        <div className="lable_1">


                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="event"  onChange={e => setVenue(e.target.value)} id="venue" aria-describedby="venue" autoComplete="off"/>
                        <span class="label">Venue</span>
                        <span class="focus-bg"></span>
                        </label>
                            


                            {/* <label className="form_lable" htmlFor="venue">Enter Venue</label><br />
                            <input type="text"
                                onChange={e => setVenue(e.target.value)}
                                className="input_form" id="venue" aria-describedby="venue" placeholder="Enter Venue " autoComplete="off" /> */}
                        
                        
                        </div>
                        <br />

            

                        <div className="lable_1">


                        <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" htmlFor="event"  onChange={e => setDetail(e.target.value)} id="detail" aria-describedby="detail" autoComplete="off"/>
                        <span class="label">Details</span>
                        <span class="focus-bg"></span>
                        </label>


                            {/* <label className="lable_1" htmlFor="detail">Enter Details</label><br/>
                            <textarea min-row="2" column="40" 
                                onChange={e => setDetail(e.target.value)}
                                className="input_form_tarea" id="detail" aria-describedby="detail" placeholder="Enter Detail" autoComplete="off" />
                       
                        */}
                       </div><br />

                    </div>

                    <button type="submit" className="button_add">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Add_Schedule;
