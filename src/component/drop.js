import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SimplePaper from './infoBoxx.js';
import BarChart from './barChart.js';
import Doughnutchart from './newChart.js';
import Linechart from './linechart.js';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 140,
    },
}));
export default function ControlledOpenSelect() {
    const [globalData, setglobalData] = useState([]);
    const [countrySelect, setcountrySelect] = useState("WorldWide");
    const [countrydataa, setcountrydataa] = useState([]);

    useEffect(() => {
        fetch("https://api.thevirustracker.com/free-api?global=stats")
            .then((response) => response.json())
            .then((data) => {
                const cData = data.results[0]
                setcountrydataa(cData);
            });
    }, []);

    useEffect(() => {
        const getCountries = async () => {
            await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
                .then((response) => response.json())
                .then((data) =>
                    data.countryitems[0]
                )
                .then((newdata) =>
                    newdata
                )
                .then((filterData) => {
                    const data = filterData;
                    const countries = Object.keys(data).map(key => {
                        const country = data[key];
                        return {
                            name: country.title,
                            value: country.code,
                        };
                    });

                    setglobalData(countries);

                });


        };
        getCountries();
    }, []);


    const onChangeEvent = async (event) => {
        const addValue = event.target.value;
        const url =
            addValue === "WorldWide"
                ? "https://api.thevirustracker.com/free-api?global=stats"
                : `https://api.thevirustracker.com/free-api?countryTotal=${addValue}`;
        if (url === "https://api.thevirustracker.com/free-api?global=stats") {

            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const cData = data.results[0]
                    setcountrySelect(addValue);
                    setcountrydataa(cData);
                });
        } else {
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const cData = data.countrydata[0]
                    setcountrySelect(addValue);
                    setcountrydataa(cData);
                });
        }

    };
    const classes = useStyles();

    return (

        <div>

            <SimplePaper totalC={countrydataa.total_cases} totalR={countrydataa.total_recovered} totalD={countrydataa.total_deaths} />

            <Button>
            </Button>

            <FormControl className={classes.formControl}>
                <InputLabel >Select country</InputLabel>

                <Select value={countrySelect} onChange={onChangeEvent}>

                    <MenuItem value="WorldWide">WorldWide</MenuItem>
                    {
                        globalData.map((country) => (<MenuItem value={country.value}>
                            {country.name}
                        </MenuItem>))
                    }


                </Select>
            </FormControl>
            <div><Linechart totalC={countrySelect} /></div>

            <div><Doughnutchart totalC={countrydataa.total_cases} totalR={countrydataa.total_recovered} totalD={countrydataa.total_deaths} />
            </div>
            <div><BarChart totalC={countrydataa.total_cases} totalR={countrydataa.total_recovered} totalD={countrydataa.total_deaths} /></div>
        </div>
    );


}
