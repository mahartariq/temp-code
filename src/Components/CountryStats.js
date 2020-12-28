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
            width:  theme.spacing(28),
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


export default function CountryStat({val}) {
    const classes = useStyles();
    const classesT = useStylesT();

const [data,setdata] = useState();
const [loading,setLoading] = useState(false);
useEffect(()=>{
    async function fetchData(){
        setLoading(true);
        const apiresponse =await fetch('https://disease.sh/v3/covid-19/countries');
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
                    <Typography variant="h3" gutterBottom style={{color:"#737270"}}>
                    {load}
      </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"red"}}>
                        Total Deaths
      </Typography>
                    <Typography variant="h4" gutterBottom style={{color:"red"}}>
                    {load} 
                         </Typography></div></Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"green"}}>
                        Total Recovered
      </Typography>
                    <Typography variant="h4" gutterBottom style={{color:"green"}}>
                    {load}
      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#8080FF"}}>
                        Active Cases
      </Typography>
                    <Typography variant="h4" gutterBottom style={{color:"#8080FF"}}>
                    {load}
      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom style={{color:"#99001a"}}>
                        Serious, Critical
      </Typography>
                    <Typography variant="h4" gutterBottom style={{color:"#99001a"}}>
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
                    <Typography variant="subtitle2" gutterBottom >
                        Confirmed Cases
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    <NumberFormat value={data && data[val].cases} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom>
                        Total Deaths
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    
                    <NumberFormat value={data && data[val].deaths} displayType={'text'} thousandSeparator={true} />

      </Typography></div></Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom >
                        Total Recovered
      </Typography>
                    <Typography variant="h4" gutterBottom >
                    <NumberFormat value={data && data[val].recovered} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={classesT.root}>
                    <Typography variant="subtitle2" gutterBottom >
                        Active Cases
      </Typography>
                    <Typography variant="h4" gutterBottom>
                    <NumberFormat value={data && data[val].active} displayType={'text'} thousandSeparator={true} />

      </Typography>
                </div>
            </Paper>
            
        </div>
    );
}
