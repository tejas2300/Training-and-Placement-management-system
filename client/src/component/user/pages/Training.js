import React from 'react'
import { Link } from 'react-router-dom';
import { isAuth } from '../../../action/authAcation';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../../../App.css';
// Users company
const Training = ({ posts_training }) => {
    return (
        <div >
            <label className="add_sche_head">Trainning Sessions</label>
            {posts_training.map((training , key) => (
                < div className="student_placement_container" key={key} >
                    <label className="train_comp_name">Company Name: -</label><span></span><b><label className="train_comp_name">{training.companyname}</label></b><br/>
                    <label className="train_comp_date">Date: -</label><span></span><b><label className="train_comp_date">{training.reg_date}</label></b><br/>
                    <label className="train_comp_duration">Duration of trainning: -</label><span></span><b><label className="train_comp_duration">{training.duration}</label></b><br/>
                    <label className="train_comp_mode">Mode of trainning: -</label><span></span><b><label className="train_comp_mode">{training.mode}</label></b><br/>
                    <label className="train_comp_pre">Prerequisite: -</label><span></span><b><label className="train_comp_pre">{training.prerequisite}</label></b><br/>
                </div>
            ))}


        </div>
    )
}

export default Training
