"use client"
import {useState} from "react";
import {Question} from "@/app/domain/Question";
import Link from "next/link";

interface Props {
    question: any;
}
export default function QuestionView({question}: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    const qs = sessionStorage.getItem("gs") ?? 7;
    const qsDone = sessionStorage.getItem("gsDone") ?? 0;
    const showNext = qs - qsDone;

    return (
        <>
            <h1>{question[0]}</h1>
            {showAnswer && <h2>{question[1]}</h2>}
            <button onClick={() => setShowAnswer(prev => !prev)}>Show Answer</button>
            {!!showNext && <Link href={"/start"}>Next</Link>}
        </>
    );
}