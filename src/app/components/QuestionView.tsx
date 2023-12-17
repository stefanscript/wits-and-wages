"use client"
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {TOTAL_QUESTIONS_KEY} from "@/app/constants";
import LinkButton from "@/app/components/LinkButton";
import Button from "@/app/components/Button";

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
            <h2>{" "}{showAnswer && question.answer}</h2>
            <Button onClick={() => setShowAnswer(prev => !prev)} title={"Show Answer"} />
            {showNext && <Button onClick={onNextQuestion} title={"Next"} /> }
            <LinkButton path={"/"} title={"Back to Start"} subtitle={""} />
        </>
    );
}