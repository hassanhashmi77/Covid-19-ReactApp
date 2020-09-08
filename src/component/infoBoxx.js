
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CountUp from 'react-countup';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        maxWidth: 900,
        marginTop: 20,
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(28),
            height: theme.spacing(16),
        },
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

export default function SimplePaper({ totalC, totalR, totalD
}) {
    const classes = useStyles();
    const Totall = totalC;

    return (

        <div className={classes.root}>
            <Paper elevation={3} className={classes.Paper}>
                <h3 className={classes.title}>TOTAL CASES</h3>
                <h3>
                    < CountUp start={0} end={[Totall]} duration={2} separator="," />
                </h3>
            </Paper>

            <Paper elevation={3} className={classes.Paper}>
                <h3 className={classes.title}>TOTAL RECOVERD</h3>
                <h3>
                    < CountUp start={0} end={[totalR]} duration={2.5} separator="," />
                </h3>
            </Paper>

            <Paper elevation={3} className={classes.Paper}>
                <h3 className={classes.title}>TOTAL DEATHS</h3>
                <h3>
                    < CountUp start={0} end={[totalD]} duration={2.5} separator="," />
                </h3>
            </Paper>
        </div>
    );
}
