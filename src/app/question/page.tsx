import {getQuestion} from "@/app/questions";
import QuestionView from "@/app/components/QuestionView";

export default async function QuestionPage() {
    const question = await getQuestion();

    return (
        <QuestionView question={question}/>
    );
}