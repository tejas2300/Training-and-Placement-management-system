import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Chart } from "react-google-charts";

const Bar = (props) => {



    const [year, setYear] = useState("");
    const [totalaplied, setTotalaplied] = useState("");
    const [selected, setSelected] = useState("");
    const [totalcomanies, setTotalcompanies] = useState("");
    const [department, setDepartment] = useState("");
    // const [schedule, setSchedule] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/stats/${props.match.params.id}`)
            .then(res => [

                setYear(res.data.year),
                setTotalaplied(res.data.totalaplied),
                setSelected(res.data.selected),
                setTotalcompanies(res.data.totalcomanies),
                setDepartment(res.data.department),
                // setSchedule(res.data.schedule),

            ])
            .catch(error => console.log(error));
    }, [props]);

    const Totalaplied = Number( totalaplied)
    const Selected = Number( selected)
    const Totalcomanies= Number( totalcomanies)
    const Department = Number( department)
    const NotSelected = Totalaplied-Selected
          
    return (
        <>
            <div className="pie_chart">
            <div className="student_placement_container_chart">
 
           Year: <b>{year}</b><br/>
           Total Companies: <b>{totalcomanies}</b><br/>
           Total Applied: <b>{totalaplied}</b><br/>
           Selected: <b>{selected}</b><br/>
           Not Selected: <b>{NotSelected}</b><br/>
            </div>
            {/* <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Element',
                        'Density',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                    ],
                    ['Copper', , '#b87333', null],
                    ['Silver', 10.49, 'silver', null],
                    ['Gold', 19.3, 'gold', null],
                    ['Platinum', 21.45, 'color: #e5e4e2', null],
                ]}
                options={{
                    title: 'Density of Precious Metals, in g/cm^3',
                    width: 600,
                    height: 400,
                    bar: { groupWidth: '95%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
            /> */}

<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Hours per Day'],
    ['Total Applied Students ', Totalaplied],
    ['Selected ', Selected],
    ['Not Selected ', NotSelected],
   
  ]}
  options={{
    title: 'Yearly Statistics',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>


</div>

        </>
    )
}

export default Bar
