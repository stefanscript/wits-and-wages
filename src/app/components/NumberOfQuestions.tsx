"use client";
import React, {useEffect, useState} from "react";
import {TOTAL_QUESTIONS_KEY} from "@/app/constants";

const NumberOfQuestions: React.FC = () => {
    const [numberOfQuestions, setNumberOfNumberOfQuestions] = useState(7);


    useEffect(() => {
        sessionStorage.setItem(TOTAL_QUESTIONS_KEY, "7");
    }, [])

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value)
        if (!isNaN(value)) {
            setNumberOfNumberOfQuestions(value);
            sessionStorage.setItem(TOTAL_QUESTIONS_KEY, String(value));
        }
    }

    return (
        <>
            <h2>Let start! How many questions?</h2>
            <input className={"w-32"} name={"numberOfQuestions"} type={"number"} value={numberOfQuestions}
                   onChange={onChange}/>
        </>
    )
}

export default NumberOfQuestions;