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

    function onNextQuestion() {
        router.push(`/question/${questionNo + 1}`);
    }

    return (
        <div className={"flex flex-col items-center justify-center gap-2"}>
            <h1 className={"h-32"}>{question.questionText}</h1>
            <p className={"text-gray-400 mb-10"}>{questionNo}/{totalQuestionsPerGame.current}</p>
            <h2 className={`${showAnswer ? "opacity-1" : "opacity-0"} mb-10`}>{question.answer}</h2>
            <div className={"flex flex-row justify-between mb-20"}>
                <Button onClick={() => setShowAnswer(prev => !prev)} title={"Show Answer"} type={"primary"} />
                {showNext && <Button onClick={onNextQuestion} title={"Next"} type={"outline"}/>}
            </div>
            <LinkButton path={"/"} title={"Back to Start"} subtitle={""} type={"outline"}/>
        </div>
    );
}