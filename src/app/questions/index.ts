import fs from "fs";
import {Question} from "@/app/domain/Question";

export async function getQuestion(): Promise<any> {
    const qsAndAnswers = await getAllQuestionsAndAnswers();
    const maxIndex = qsAndAnswers.length - 1;
    const index = Math.floor((Math.random() * maxIndex));
    return [qsAndAnswers[index].question, qsAndAnswers[index].answer];
}

async function getAllQuestionsAndAnswers(): Promise<Question[]> {
    return new Promise((res, reject) => {
        //todo make more efficient
        const questionsAndAnswers: string[][] = [];

        fs.readFile(`${process.cwd()}/scripts/questions.csv`, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.split("\n");
                const result = lines.map(line => {
                    const [question, answer] = line.split(",");
                    return new Question(question, Number(answer));
                })
                res(result);
            }
        });
    })
}

