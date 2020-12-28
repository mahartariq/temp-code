import React, { useState, useEffect } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';
//import CountryData from './CountryData';
import CountryStats from './CountryStats';

export const CountryPicker = () => {


    const [ccdata, setcdata] = useState([])
    //    const [cload, csetload] = useState([false])
    useEffect(() => {
        async function fetchcdata() {
            //          csetload(true);
            const cresponse = await fetch('https://disease.sh/v3/covid-19/countries');
            const cdata = await cresponse.json();
            console.log(cdata);
            setcdata(cdata);
            //  csetload(false);
        } fetchcdata();
    }, [])


    let cc;
    let [index, setIndex] = useState(0);

    return (
        <div>

            <NativeSelect id="select" onChange={(e) =>{ cc=e.target.value;
            index = ccdata.findIndex(x=>x.country===cc);
                setIndex(index);
            }}>
                {ccdata && ccdata.map(({ country }, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
            <br></br>
            <CountryStats val={index} />
        </div>
    )
}

