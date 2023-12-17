"use client"
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {TOTAL_QUESTIONS_KEY} from "@/app/constants";

interface Props {
    question: {
        questionText: string;
        answer: string;
    };
    questionNo: number
}
export default function QuestionView({question, questionNo}: Props) {
    const [showAnswer, setShowAnswer] = useState(false);
    const router = useRouter();

    let totalQuestionsPerGame = useRef(Number(sessionStorage.getItem(TOTAL_QUESTIONS_KEY) ?? 7))

    const showNext = totalQuestionsPerGame.current - questionNo > 0;

    function onNextQuestion(){
        router.push(`/question/${questionNo + 1}`);
    }

    return (
        <>
            <h1>{question.questionText} {questionNo}/{totalQuestionsPerGame.current}</h1>
            {showAnswer && <h2>{question.answer}</h2>}
            <button onClick={() => setShowAnswer(prev => !prev)}>Show Answer</button>
            {showNext && <button onClick={onNextQuestion}>Next</button>}
            <Link href={"/"}>Back to Start</Link>
        </>
    );
}