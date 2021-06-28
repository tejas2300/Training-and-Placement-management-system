import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from 'react-router-dom';

const students = ({ posts_students }) => {
    return (

        
        <div className="main_div_table">
                   <style>{'body { background-color: #fff ; }'}</style>
            <label className="add_sche_head">List of Department</label><br />
            <div className="Fidiv">
                <table id="emp" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>GO</th>
                        </tr>
                    </thead>
                    <tbody>{posts_students.map((users, key) => {
                        return <tr key={key}>
                            <td>{users.dept_name}</td>
                     

                            <td>

                                <div className="fill_mark_btn">


                                    <Link to={{
                                        pathname: `/allstudents/${users._id}`
                                    }}><button className="button_std"><span>View Students</span></button>
                                    </Link>

                                </div></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                {/* <div>
                    <ReactHTMLTableToExcel
                        className="export_btn"
                        table="emp"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText="Export to excel" />
                </div> */}
            </div>

        </div>
    )
}

export default students
