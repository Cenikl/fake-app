import React, {useEffect, useState} from 'react';
import '../App.css';
import {PercentBattery} from './Battery';
import logo from "../logo.svg";

export function Head() {
    const [time,setTime] = useState("" + new Date().getHours()+ ":" + new Date().getMinutes());
    useEffect(() =>{
        setInterval(()=> {
            setTime(new Date().getHours()+ ":" + new Date().getMinutes());
        },1000)
    }, [] );

    return (
        <>
            <div className="head" >
                <p className="ops"> <img src={logo} className="App-logo" alt="logo" /></p>
                <p className="clock">
                    {time}
                </p>
                <div className="case">
                        <div className="battery">
                        {PercentBattery()}
                        </div>
                    <div className="bop"></div>
                </div>
            </div>
        </>
    );
}
