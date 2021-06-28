import React from 'react'
// import {Area, CirclePie, BarMetric} from 'react-simple-charts'
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";
const t = 12;
const Statistics = ({ posts_stat }) => {
    return (
        <>
            <label className="add_sche_head">List of Department</label><br/>
            <h5>Click on department name to apply</h5><br/>


        <div className="company_container">
            {posts_stat.map((stat, key) => (
                < div key={key} >
                    {/* <h1 >{stat.year}</h1>
                    <h1 >{stat.totalaplied}</h1>
                    <h1 >{stat.selected}</h1>
                    <h1 >{stat.totalcomanies}</h1>
                    <h1 >{stat.department}</h1> */}
                    <Link to={{
                        pathname: `/bar/${stat._id}`
                    }}>
                        <b>{stat.department}</b>
                    </Link>

                    

                </div>
                
            ))}
            </div>
        </>
    )
}

export default Statistics
