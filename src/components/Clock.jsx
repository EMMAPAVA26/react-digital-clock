import { useEffect } from "react";
import { useState } from "react"

 export const Clock = () => {

 const[time, setTime] =useState(new Date().toLocaleTimeString());

 useEffect(() =>{
  const updateTime = () =>{
    setTime(new Date().toLocaleTimeString())
  };

 const intervalTd = setInterval(updateTime, 1000);

 return () => clearInterval(intervalTd);

 },[])
 
    return(
        <div className="clock-container">
            <h1 className="clock-time">{time}</h1>
        </div>
    )
}

