import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ totalC, totalR, totalD
}) {


    return (
        <div
            style={{
                width: '50%',
                right: '45px',
                position: 'absolute',


            }}
        >

            <h3>Current Situation Show in Bar Chart</h3>
            <Bar
                data={{
                    labels: ['infected', 'recoverd', 'death'],
                    datasets: [
                        {
                            label: 'Number',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [totalC, totalR, totalD]
                        }
                    ]
                }
                }

            />
        </div>
    );

}
export default BarChart;