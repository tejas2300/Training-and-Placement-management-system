import React, { useState, useEffect } from 'react'
import axios from "axios"
import { isAuth } from '../../../action/authAcation';
import { useHistory } from 'react-router-dom';

const Select_company = props => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    useEffect(() => {
        
        axios.get(`http://localhost:8000/company/${props.match.params.id}`)
            .then(res => [
                setName(res.data.name),
                setEmail(res.data.email),
               
            ])
            .catch(error => console.log(error));
    }, [props]);


    const cUpdate = () => {
        const company = {
            idu: email,
            idm: isAuth().email
        }
        const res1=axios.put(`http://localhost:8000/company/update`, company)
        const res2=axios.put(`http://localhost:8000/users/update`, company)
        if (res1.status&&res2.status === 400 ) {
            window.alert("Invalid Registration")

        } else {
            window.alert("Registration successfull")
            history.push("/")

        }
    }
    return (
        <>
        <label className="add_sche_head">Apply for Drives</label><br/>
        <div className="company_container">
            <h2 className="com">{name}</h2>
            <button className="export_btn" onClick={cUpdate} >Apply </button>
        </div>
        </>
    )
}

export default Select_company
