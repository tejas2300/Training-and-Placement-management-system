import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const Add_companies = ({posts_company}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [packege, setPackege] = useState("");
    const [basedOn, setBasedOn] = useState("");
    const [detail, setDetail] = useState("");
    const [company, setCompany] = useState([]);


    const deleteSchedule = id=>{
        const del = axios.delete(`http://localhost:8000/company/${id}`)
        .then(res=>(res.data))
        setCompany(company.filter(elem=>elem._id !==id));
        if (del.status === 400 ) {
            window.alert("Invalid Deletion")

        } else {
            window.alert("Successfully Deleted")
            window.location.reload();
        }

    }


    const history = useHistory();
    const changeOnClick = e => {
        e.preventDefault();


        const company = {
            name,
            date,
            email,
            packege,
            basedOn,
            detail,

        }

        const res1 = axios.post("http://localhost:8000/company/add", company)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        if (res1.status === 400 || !name || !email || !packege) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            // history.push("/")
            window.location.reload();
        }

    };


    return (
        <div>

<label className="add_sche_head">Company Section</label><br/>
            <label className="list_head">List of Add Companies</label>

<div className="Fidiv">
            <table id="emp" className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>date</th>
                        <th>Packege</th>
                        <th>Based on(Product/Service Based)</th>
                        <th>Company details</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{posts_company.map((schedule , key) => {
                        return <tr key={key}>
                            <td>{schedule.name}</td>
                            <td>{schedule.email}</td>
                            <td>{schedule.date}</td>
                            <td>{schedule.packege}</td>
                            <td>{schedule.basedOn}</td>
                            <td>{schedule.detail}</td>
                            <td><button className="delete_btn" onClick={()=>deleteSchedule(schedule._id)}><b>Delete</b></button></td>
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
        <div className="fi_title"><label className="add_schedule">Add Company</label></div><br/>



            <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">

                <div className="lable_1">

                <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setName(e.target.value)} id="name" aria-describedby="name" autoComplete="off"/>
                <span class="label">Company Name</span>
                <span class="focus-bg"></span>
                </label>


                     {/* <label classname="form_lable" htmlFor="name">Enter company Name</label> 
                    <input type="text"
                        onChange={e => setName(e.target.value)}
                        className="input_form" id="name" aria-describedby="name" autoComplete="off" /> */}


                </div><br/>
                <div className="lable_1">

                <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setEmail(e.target.value)} id="email" aria-describedby="email" autoComplete="off"/>
                <span class="label">Company Drive</span>
                <span class="focus-bg"></span>
                </label>
{/* 
                    <label classname="form_lable" htmlFor="url">Company Drive</label>
                    <input type="text"
                        onChange={e => setEmail(e.target.value)}
                        className="input_form" id="email" aria-describedby="email" autoComplete="off" /> */}


                </div><br/>
                <div className="form_lable_sign">

                <label for="inp" class="inp">
                <input className="form_lable_sign" type="date" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setDate(e.target.value)} id="email" aria-describedby="date" autoComplete="off"/>
                <span class="label">Date</span>
                <span class="focus-bg"></span>
                </label>


                    {/* <label  classname="form_lable" htmlFor="email">Select Date</label>
                    <input type="date"
                        onChange={e => setDate(e.target.value)}
                        className="input_form" id="date" aria-describedby="date" autoComplete="off" /> */}


                </div><br/>
                <div className="lable_1">


                <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" htmlFor="name" onChange={e => setPackege(e.target.value)} id="packege" aria-describedby="packege" autoComplete="off"/>
                <span class="label">Package</span>
                <span class="focus-bg"></span>
                </label>


                     {/* <label classname="form_lable" htmlFor="packege">Enter Package</label>
                    <input type="text"
                        onChange={e => setPackege(e.target.value)}
                        className="input_form" id="packege" aria-describedby="packege" autoComplete="off" /> */}

                </div><br/>
                <div className="form_lable_sign">
                    <label classname="form_lable_sign" htmlFor="basedOn">Category</label><span></span>



                    {/* <input type="text"
                        onChange={e => setBasedOn(e.target.value)}
                        className="input_form" id="basedOn" aria-describedby="basedOn" placeholder="Enter company type(Product/Service based) " autoComplete="off" />
                */}
                
               <select className="form_lable_sign" id="basedOn" name="base"  onChange={e => setBasedOn(e.target.value)}>
                <option value="Product Based">Product Based</option>
                <option value="Service Based">Service Based</option>
              </select>


               
                </div><br/>
                <div className="form_lable_sign">
                    {/* <label htmlFor="detail">Phone</label> */}
                    <label classname="form_lable_sign" htmlFor="packege">Company Details</label>
                    <textarea min-row="2" column="40" 
                        onChange={e => setDetail(e.target.value)}
                        className="input_form_tarea" id="detail" aria-describedby="detail" placeholder="Enter Detail" autoComplete="off" />
                </div><br/>



                <button type="submit" className="button_add">Submit</button>


                
            </form>
</div>
        </div>
    )
}

export default Add_companies;
