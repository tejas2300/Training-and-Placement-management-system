import React from 'react'
import { Link } from 'react-router-dom';
import { isAuth } from '../../../action/authAcation';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../../../App.css';
// Users company
const Company = ({ posts_company }) => {
    return (
        <div >
            <label className="add_sche_head">List of Companies</label><br/>
            <h5>Click on company name to apply</h5>
            <div className="company_list">
            {posts_company.map((company, key) => (
                < div className="company_container" key={key} >
                    <Link to={{
                        pathname: `/select_company/${company._id}`
                    }}>
                        <b>{company.name}</b>
                    </Link>

 
                </div>
            ))}
            </div>

        </div>
    )
}

export default Company
