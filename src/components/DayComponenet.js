import React, { useState, useEffect } from "react";

const Day = (props) =>{
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = weekday[date.getDay()]
    var dat = ""
    if(date.getDate() % 10 === 1 && date.getDate() !== 11){
        dat = date.getDate() + "th"
    }
    else if(date.getDate() % 10 === 2 && date.getDate() !== 12){
        dat = date.getDate() + "nd"
    }
    else if(date.getDate() % 10 === 3 && date.getDate() !== 13){
        dat = date.getDate() + "rd"
    }
    else{
        dat = date.getDate() + "th"
    }
    
    return(
        <>
            <h1>{day}, {dat}</h1>
            <h3>{month[date.getMonth()]}</h3>
            <h3>{date.toLocaleTimeString()}</h3>
        </>
    )
}

export default Day;