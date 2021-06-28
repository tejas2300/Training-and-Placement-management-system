
import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../../App.css"
import { useHistory } from 'react-router-dom';

const Fill_marks = props => {

    const history = useHistory();
    const [selection, setSelection] = useState('');
    
    // const [apply = [], setApply] = useState([]);
    const u_idd = props.match.params.id
    const c_idd = props.match.params.id2

    console.log(c_idd)
    console.log(u_idd)


    // useEffect(() => {

    //     axios.get(`http://localhost:8000/users/count/60d8065aca440264f0fab56b`)

    //         .then(res => [
                
    //             setApply(res.data.apply),

    //         ])
    //         .catch(error => console.log(error));
    // }, []);

// const len=apply.length
    const changeOnClick = e => {
        e.preventDefault();

        const marks = {
            c_idd,
            u_idd,
           selection
        }

        const res1 = axios.put(`http://localhost:8000/users/update1`, marks)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));


        const res2 = axios.put(`http://localhost:8000/company/update1`, marks)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));



        if (res1.status && res2.status === 400) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            // history.push("/")

        }

    };

    return (

        <div className="regi_form">
            <label className="add_sche_head">give status selected or not </label><br />

{/* <h1>{len}</h1> */}
            <form className="input-section" onSubmit={changeOnClick} encType="multipart/form-data">
              
                {/* <div className="lable_1">
                    <label classname="form_lable" htmlFor="companyname">Company Name</label>
                    <input type="text"
                        onChange={e => (e.target.value)}
                        className="input_form" id="companyname" aria-describedby="companyname" placeholder="Enter Company Name" autoComplete="off" />

                </div><br /> */}




                <select id="selection" name="select"  onChange={e => setSelection(e.target.value)}>
                    <option value="Selected">Selected</option>
                    <option value="Not Selected">Not Selected</option>
                </select><br/><br/><br/>

{/* 
                <label for="toggle">
                    <input class="input" id="toggle" type="checkbox"     />
                    <div class="toggle-wrapper"><span class="selector"></span></div>
                    <p class="notification">You have selected<span class="selected"></span></p>
                </label>
 */}

                <button type="submit" className="sub_btn">Submit</button>
            </form>

        </div>


       
    )
}




export default Fill_marks




// {/* <h2>{Company}</h2>


// <button class="button button1">Selected</button>
// <button class="button button2">Not Selected </button>

// </body>
// </html>

//  */}

// {/* <style>
// .button {
//   background-color: #000000; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   -webkit-transition-duration: 0.4s; /* Safari */
//   transition-duration: 0.4s;
// }

// .button1 {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
// }

// .button2:hover {
//   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
// }
// </style>
// </head>

//  */}


