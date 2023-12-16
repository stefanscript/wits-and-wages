"use client"
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {TOTAL_QUESTIONS_DONE_KEY, TOTAL_QUESTIONS_KEY} from "@/app/constants";

interface Props {
    question: any;
}
export default function QuestionView({question}: Props) {
    const [showAnswer, setShowAnswer] = useState(false);
    const router = useRouter()

    const qs = Number(sessionStorage.getItem(TOTAL_QUESTIONS_KEY) ?? 7);
    const qsDone = Number(sessionStorage.getItem(TOTAL_QUESTIONS_DONE_KEY) ?? 0);
    const showNext = qs - qsDone > 0;

    async function onNextQuestion(){
        sessionStorage.setItem(TOTAL_QUESTIONS_DONE_KEY, String(qsDone + 1));
        await router.push("/question");
    }

    return (
        <>
            <h1>{question[0]} {qsDone}/{qs}</h1>
            {showAnswer && <h2>{question[1]}</h2>}
            <button onClick={() => setShowAnswer(prev => !prev)}>Show Answer</button>
            {!!showNext && <button onClick={onNextQuestion}>Next</button>}
            <Link href={"/"}>Back to Start</Link>
        </>
    );
}