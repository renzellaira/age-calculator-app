import React from "react";
import "./AgeCalculator.css"
import TextField from '@mui/material/TextField';
import InputField from "./inputField";
import { useState, useEffect } from "react";
import submitIcon from "../assets/icon-arrow.svg";
const AgeCalculator = () => {

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [resDay, setresDay] = useState("--");
    const [resMonth, setresMonth] = useState("--");
    const [resYear, setresYear] = useState("--");
    const [isError,setError] = useState(false)
  

    const handleChange = (id, value) => {
        console.log(value)
        id === "day" && setDay(value);
        id === "month" && setMonth(value);
        id === "year" && setYear(value);
       handleError(id)
   
    }

    const handleError = (id) => {
        if ((id === "day") && (month == 2 ) && (day > 30)) {
            setError(true)
        } else {
            setError(false)
        }
        console.log(isError)
    }

    const handleSubmit = () => {
        const today = new Date();
        console.log(today)
        // const monthRes = today.getMonth();
        // const yearToday = today.getFullYear();
        // const dayToday = today.getDate();

        // setresDay()
        // console.log("day", day)
        // console.log("month", month)
        // console.log("year", year)
    }

    return (
        <div className="card">
            <form className="formCont">
                <div className="inputCont">
                    <InputField
                        label="DAY"
                        id="day"
                        placeholder="DD"
                        helperText="Must be a valid day"
                        handleChange={handleChange}
                        max={31}
                        error={isError}
                    />
                    <InputField
                        label="MONTH"
                        id="month"
                        placeholder="MM"
                        helperText="Must be a valid month"
                        handleChange={handleChange}
                        max={12}
                        error={isError}
                    />
                    <InputField
                        label="YEAR"
                        id="year"
                        placeholder="YYYY"
                        helperText="Must be a past"
                        handleChange={handleChange}
                        max={2023}
                        error={isError}
                    />
                </div>
                <button className="submitButton" onClick={handleSubmit}><img src={submitIcon} /></button>
            </form>
            <div className="resultCont">
                <div className="result"> <p><span>{resDay}</span>years</p></div>
                <div className="result"> <p> <span>{resMonth}</span>month</p></div>
                <div className="result"> <p> <span>{resYear}</span>days</p></div>
            </div>
        </div>
    )

}

export default AgeCalculator;