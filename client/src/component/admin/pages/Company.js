import React from 'react'
import { Link } from 'react-router-dom';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../../../App.css';

const Company = ({ posts_company }) => {
    return (
        <div>
 
            {posts_company.map((company, key) => (
              < div className="company_container" key={key} >
                    <Link to={{
                        pathname:`/company_reg/${company._id}`
                    }}>
                    <b>{company.name}</b><br/>
                    </Link>
                   
                    <b>{company.email}</b><br/>
                    <b>{company.phone}</b>
                   
                    </div>
            ))}


        </div>
    )
}

export default Company
