import {getQuestion} from "@/app/questions";
import QuestionView from "@/app/components/QuestionView";

export default async function StartPage() {
    // const numberOfQuestions = sessionStorage.getItem("qs") ?? 7;
    const question = await getQuestion();

    return (
        <QuestionView question={question}/>
    );
}