import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../../App.css"
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { isAuth } from '../../../action/authAcation';



const Results = () => {



    const [apply= [], setApply] = useState([]);
    const [apply2 = [], setApply2] = useState([]);


    useEffect(() => {

        axios.get(`http://localhost:8000/users/${isAuth()._id}`)

            .then(res => [
                
                setApply(res.data.apply),

            ])
            .catch(error => console.log(error));
    }, []);
//     useEffect(() => {
// const data={

// }
//         axios.get(`http://localhost:8000/users/count/${isAuth()._id}`,)

//             .then(res => [
                
//                 setApply2(res.data.apply),

//             ])
//             .catch(error => console.log(error));
//     }, []);


const len=apply.length;


    return (
        <>
        <label className="add_sche_head">See your Performance</label><br/>
        <div className="pie_chart">

        <h4>Total Applied companies: {len}</h4>
            <b>{apply.map(e =>
                <div className="chart_list">
                    <p>Company name:{e.id}</p>
                    <p>Status:{e.status}</p>

                    {/* <div class = "horizontal"></div> */}
                    {/* <div>
                    <h3> <button className="round1"></button><span></span>Round1 = {e.round1}</h3>
                    <h3> <button className="round2"></button><span></span>Round2 = {e.round2}</h3>
                    <h3> <button className="round3"></button><span></span>Round3 = {e.round3}</h3>
                    </div><br/> */}
                    {/* <PieChart
                        data={[
                            { title: 'One', value: Number(e.round1), color: '#FFEC00' },
                            { title: 'Two', value: Number(e.round2), color: '#FF7300' },
                            { title: 'Three', value: Number(e.round3), color: '#007ED6' },
                        ]}
                    /> */}
                </div>
            )}</b>

        </div>
        </>
    )
}




export default Results
