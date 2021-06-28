import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { AtomSpinner } from 'react-epic-spinners'
const Schedule = ({ posts_schedule }) => {
    return (
        <>
            
            <div className="Fidiv">
                <table id="emp" className="table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Department</th>
                            <th>venue</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>


                        {posts_schedule.map((schedule, key) => {
                            return <tr key={key}>
                                <td>{schedule.event}</td>
                                <td>{schedule.date}</td>
                                <td>{schedule.time}</td>
                                <td>{schedule.department}</td>
                                <td>{schedule.venue}</td>
                                <td>{schedule.detail}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default Schedule
