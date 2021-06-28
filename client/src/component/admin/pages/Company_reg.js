import React, { useState } from 'react'
import "../../../App.css"
import { Link } from 'react-router-dom';
import axios from 'axios'

const Company_reg = ({ posts }) => {


    const [selection, setSelection] = useState("");
    const select=() => {
     


        const dept  = {
            selection,
        }

       axios.put("http://localhost:8000/companies/update", dept)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
       

    };




    return (
        <div className="main_stc">
            <label className="add_sche_head">List of Registration</label>
            {!posts.length ? (<img alt="loding ...." />) : (
                posts.map((Students, key) => (

                    <div className="student_placement_container">

                        <label className="stdu_name">Student name: - <b>{Students.name}</b></label>
                        {Students.apply.map(e =>
                            <div className="main">
                                <div className="content_"><div className="company_id"><lable >Company ID: - {e.id}</lable></div>
                                    <div className="fill_mark_btn">
                                        <Link to={{
                                            pathname: `/fill_marks/${Students.email}/${e.id}`
                                        }}>
                                        <button className="selec_sttus" id="selected">Selection Status</button>

                                {/* 
                                        <select id="selection" name="selection" onChange={e => setSelection(e.target.value)} value={selection}>
                                            <option value="Selected">Selected</option>
                                            <option value="Not Selected">Not Selected</option>
                                        </select> */}


                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )))}
        </div>
    )
}




export default Company_reg
