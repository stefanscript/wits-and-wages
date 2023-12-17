import {getQuestion} from "@/app/questions";
import QuestionView from "@/app/components/QuestionView";

export default async function QuestionPage({params}: {params: {id: string}}) {
    const questionNo = Number(params.id);
    const question = await getQuestion(questionNo);

    return (
        <QuestionView question={question} questionNo={questionNo}/>
    );
}