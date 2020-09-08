import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        margin: '0 auto',
        marginTop: 50,
    },
    Paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3F51B5',
    },
}));
export default function CenteredGrid() {
    const [globalData, setGlobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const apiResponce = await fetch("https://api.thevirustracker.com/free-api?global=stats")
            let apiData = await apiResponce.json();
            delete apiData.results[0].source;
            delete apiData.results[0].total_new_cases_today;
            delete apiData.results[0].total_new_deaths_today;
            delete apiData.results[0].total_active_cases;
            delete apiData.results[0].total_serious_cases;
            delete apiData.results[0].total_affected_countries;
            delete apiData.results[0].total_deaths;
            setGlobalData(apiData.results[0]);
        }
        getData();
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalData).map((val, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.Paper}
                                Paper elevation={3}>
                                <h3 className={classes.title}> {val.replace(/_/g, " ").toUpperCase()} </h3>
                                <h3>{globalData[val]}</h3>
                            </Paper>
                        </Grid>)
                })}
            </Grid>
        </div>
    );
};
