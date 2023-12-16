"use client";
import React, {useState} from "react";

const NumberOfQuestions:React.FC = () => {
    const [questions, setQuestions] = useState(7);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value)
        if (!isNaN(value)) {
            setQuestions(value);
            sessionStorage.setItem("qs", String(value));
        }
    }

    return (
        <>
            <h2>Let start! How many questions?</h2>
            <input className={"w-32"} name={"questions"} type={"number"} value={questions} onChange={onChange}/>
        </>
    )
}

export default NumberOfQuestions;