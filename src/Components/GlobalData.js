import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '97%',
            paddingTop:20,
            height: theme.spacing(11),
        },
    },
}));

const useStylesT = makeStyles({
    root: {
        width: '100%',
        maxWidth: '500',
        color:"#737270",
    },
});


export default function GlobalData() {
    const classes = useStyles();
    const classesT = useStylesT();

const [data,setdata] = useState();
const [loading,setLoading] = useState(false);
useEffect(()=>{
    async function fetchData(){
        setLoading(true);
        const apiresponse =await fetch('https://disease.sh/v3/covid-19/all');
        const apidata =await apiresponse.json();
        setdata(apidata);
        setLoading(false);
    }
    fetchData()

},[])
 
const load = "Loading"

if(loading){
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#737270"}}>
                        Confirmed Cases
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    {load}
      </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"red"}}>
                        Total Deaths
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    {load} 
                         </Typography></div></Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"green"}}>
                        Total Recovered
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    {load}
      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#8080FF"}}>
                        Active Cases
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    {load}
      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#99001a"}}>
                        Serious, Critical
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    {load}
      </Typography>
                </div>
            </Paper>

        </div>
    );

}

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#737270"}}>
                        Confirmed Cases
      </Typography>
                    <Typography variant="h4" gutterBottom style={{fontWeight:700}}>
                    <NumberFormat value={data && data.cases} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"red"}}>
                        Total Deaths
      </Typography>
                    <Typography variant="h4" gutterBottom style={{fontWeight:700}}>
                    
                    <NumberFormat value={data && data.deaths} displayType={'text'} thousandSeparator={true} />

      </Typography></div></Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"green"}}>
                        Total Recovered
      </Typography>
                    <Typography variant="h4" gutterBottom style={{fontWeight:700}}>
                    <NumberFormat value={data && data.recovered} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#8080FF"}}>
                        Active Cases
      </Typography>
                    <Typography variant="h4" gutterBottom style={{fontWeight:700}}>
                    <NumberFormat value={data && data.active} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#99001a"}}>
                        Serious, Critical
      </Typography>
                    <Typography variant="h4" gutterBottom style={{fontWeight:700}}>
                    <NumberFormat value={data && data.critical} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>

        </div>
    );
}
