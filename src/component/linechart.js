import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ totalC }) {
    const [countryval, setcountryval] = useState([]);
    useEffect(() => {
        const addValue = totalC;
        const url =
            addValue === "WorldWide"
                ? "https://api.thevirustracker.com/free-api?countryTotals=ALL"
                : `https://api.thevirustracker.com/free-api?countryTimeline=${addValue}`;
        if (url === "https://api.thevirustracker.com/free-api?countryTotals=ALL") {

            fetch(url)
                .then((response) => response.json())
                .then((filterData) => {
                    const data = filterData.countryitems[0];
                    const countries = Object.keys(data).map(key => {
                        const country = data[key];
                        return {
                            date: country.title,
                            ceases: country.total_new_cases_today
                        };
                    });
                    setcountryval(countries);
                });
        } else {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const cData = data.timelineitems[0]
                    const countriesValu = Object.keys(cData).map(key => {
                        const conn = key;
                        const country = cData[key];
                        return ({
                            date: conn,
                            ceases: country.new_daily_cases

                        });



                    }
                    )
                    setcountryval(countriesValu);
                });
        }
    }, [totalC])

    return (
        <div
            style={{
                width: '70%',
                height: '28%',
                right: '24%',
                margin: '0px Auto',


            }}
        >

            <h2>New Cases Report Show in Line chart </h2>
            <Line
                data={{
                    labels: countryval.map((date) => (date.date)),
                    datasets: [{
                        data: countryval.map((ceases) => (ceases.ceases)),
                        label: 'New Cases',
                        borderColor: '#087FD3',
                        fill: true,
                    }],
                }}



            />
        </div>
    );

}
export default LineChart;