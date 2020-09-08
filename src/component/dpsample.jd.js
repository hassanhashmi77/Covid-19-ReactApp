import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';


export default function SimpleContainer() {
    const [gData, setgData] = useState({});
    const [dData, setdData] = useState({});
    const [rData, setrData] = useState({});
    const selectEl = document.querySelector('select');

    function optionBox(data) {
        const title = data.title;
        if (typeof title != "undefined") {
            const optionBox = document.createElement('option');
            optionBox.innerHTML = title;
            selectEl.appendChild(optionBox);
        }

    }
    function manipulateData(data) {
        let eachItem;
        for (eachItem in data.countryitems[0]) {
            const m = data.countryitems[0][eachItem];
            optionBox(m);
            selectEl.addEventListener("change", function (e) {
                if (e.target.value == m.title) {
                    let totalCases = m.total_cases;
                    let deaths = m.total_deaths;
                    let recoverCases = m.total_recovered;
                    let active = m.total_active_cases;
                    console.log(totalCases, recoverCases, deaths, active);
                    setgData(totalCases);
                    setdData(deaths);
                    setrData(recoverCases);



                }

            });
        }
    }
    const apiResponce = fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            manipulateData(data);
        });
    const data = {
        labels: ['infected', 'recoverd', 'death'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [gData, rData, dData]
            }
        ]
    };

    return (

        <>

            <div>
                <h2>Covid 19</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>


        </>



    );

}