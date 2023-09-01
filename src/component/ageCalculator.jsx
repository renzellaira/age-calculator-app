import React from "react";
import "./AgeCalculator.css"
import TextField from '@mui/material/TextField';
import InputField from "./inputField";
import { useState, useEffect } from "react";
import submitIcon from "../assets/icon-arrow.svg";
import { getDay, getMonth, getYear } from "../store/dateSlice";
import { useDispatch, useSelector } from 'react-redux'
const AgeCalculator = () => {

    let day = useSelector((state) => state.date.find((e) => e.id === "day"));
    let month = useSelector((state) => state.date.find((e) => e.id === "month"))
    let year = useSelector((state) => state.date.find((e) => e.id === "year"))
    const [resDay, setresDay] = useState("--");
    const [resMonth, setresMonth] = useState("--");
    const [resYear, setresYear] = useState("--");
    const [isError, setError] = useState("")
    const dispatch = useDispatch()


    useEffect(() => {

        const dayCheck = parseInt(day.value);
        const monthCheck = parseInt(month.value);
        if ((monthCheck === 4 || monthCheck === 6 || monthCheck === 9 || monthCheck === 11) && (dayCheck > 30)) {
            setError(true)

        } else if ((monthCheck === 2) && (dayCheck > 28)) {
            setError(true)
        }
        else {
            setError(false)
        }
    }, [month, day, isError])

    const handleChange = (id, value) => {
        id === "day" && dispatch(getDay(value));
        id === "month" && dispatch(getMonth(value));
        id === "year" && dispatch(getYear(value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const bDate = month.value + "/" + day.value + "/" + year.value;

        const currentDate = new Date();
        const birthDate = new Date(bDate);

        const todayinMs = currentDate.getTime();
        const birthDateinMs = birthDate.getTime();

        const diff = todayinMs - birthDateinMs
        const diffInDays = diff / (1000 * 3600 * 24);

        const diffYears = Math.floor(diffInDays / 365);
        const diffMonths = Math.floor((diffInDays % 365) / 30);
        const diffDays = Math.floor((diffInDays % 365) % 30);

        setresDay(diffDays)
        setresMonth(diffMonths)
        setresYear(diffYears)
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
                <div className="result"> <p><span>{resYear}</span>years</p></div>
                <div className="result"> <p> <span>{resMonth}</span>month</p></div>
                <div className="result"> <p> <span>{resDay}</span>days</p></div>
            </div>
        </div>
    )

}

export default AgeCalculator;