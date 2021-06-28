import React, { useState, useEffect } from 'react'
import axios from "axios"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const AllStudents = (props) => {


    const [apply = [], setApply] = useState([]);
    const [name, setName] = useState([]);
   
    useEffect(() => {

        axios.get(`http://localhost:8000/dept/${props.match.params.id}`)
            .then(res => [
                setApply(res.data.students),
                setName(res.data.dept_name),
               
            ])
            .catch(error => console.log(error));
    }, [props]);


    return (
        <>
       <style>{'body { background-color: #fff ; }'}</style>
        <div className="main_div_table">
            <label className="add_sche_head">{name}</label><br />
            <div className="Fidiv">
                <table id="emp" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                           
                        </tr>
                    </thead>
                    <tbody>{apply.map(e =>  {
                        return <tr>
                            <td>{e.stud}</td>
                            <td>{e.id}</td>
                            {/* <td>{}</td> */}

                            
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

        </div>





        </>
    )
}

export default AllStudents
