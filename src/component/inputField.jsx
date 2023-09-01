import React from "react";
import "./inputField.css"
import { useState, useEffect } from "react";

const InputField = ({ id, label, placeholder, helperText, handleChange, max, error }) => {

    const [inputText, setInputText] = useState("");
    const [isError, setError] = useState(false)

    useEffect(() => {
        handleChange(id, inputText)
        if (inputText > max) {
            setError(true)
        } else {
            if (id === 'day') {
                setError(error)
            } else {
                setError(false)
            }
        }
    }, [inputText, error])

    const handleInput = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="inputField">
            <label className={isError ? "fieldLabel errorLabel" : "fieldLabel"} for={id}>{label}</label>
            <input onChange={handleInput} value={inputText} type="number" className={isError ? "fieldInput errorInput" : "fieldInput"} id={id} placeholder={placeholder} min={0} required />
            <div className="helperCont"> {isError && <p className="fieldHelper">{helperText}</p>}</div>
        </div>
    )
}
export default InputField;