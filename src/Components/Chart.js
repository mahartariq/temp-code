import React,{useState,useEffect} from 'react'
import {Bar} from 'react-chartjs-2';

const Chart = ({val}) => {

    
   const [Dataa,setData] = useState([]);
   const URL = "https://disease.sh/v3/covid-19/countries";
   useEffect(() => {
    const fetchData = async (url) => {
      const apiData = await fetch(url).catch(e=> console.log(e));
      const apiJSON = await apiData.json().catch(e=> console.log(e));
      setData(apiJSON);
    };
    fetchData(URL)
  }, []);


//console.log(Dataa.length);

 const chartData = { labels: ['Total Cases', 'Deaths', 'Recovered','Active Cases'],
  datasets: [
    {
      label: 'COVID-19 Stats',
      backgroundColor: ['#737270','red','green'],
      borderColor: 'black',
      borderWidth: 1,
      barThickness: 96,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: Dataa.length > 0 ? [Dataa[val].cases,Dataa[val].deaths,Dataa[val].recovered,Dataa[val].active] : [] 
        }
  ]
}

    
      return (
        <div>
            <h2>COVID-19 Bar Chart</h2>
            <Bar
          data={chartData}
          width={100}
          height={190}
          options={{
            maintainAspectRatio: false,
          }}
        />
        </div>
    )
}
export default Chart;