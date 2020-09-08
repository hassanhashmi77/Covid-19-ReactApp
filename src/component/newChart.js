import React from 'react';
import { Doughnut } from 'react-chartjs-2';


function Doughnutchart({ totalC, totalR, totalD
}) {


    return (
        <div
            style={{
                position: 'absolute',
                width: '50%',
                left: '25px',

            }}
        >
            <h3>Current Situation Show in Doughnut Chart</h3>
            <Doughnut data={{
                labels: [
                    'TOTAL CASES',
                    'RECOVERD',
                    'DEATHS'
                ],
                datasets: [{
                    data: [totalC, totalR, totalD],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]

            }}

            />
        </div >
    )

};
export default Doughnutchart;