import fs from "fs";
import {Question} from "@/app/domain/Question";

// to keep the questions
let questions: Array<Question> = [];
// to keep shuffled indexes
let questionsIndexesShuffled: Array<number> = [];

export async function getQuestion(): Promise<any> {
    if (questionsIndexesShuffled.length > 0 && questions.length > 0) {
        // console.log("cache", questionsIndexesShuffled);
        return getTopQuestionAndRemove();
    }

    //populate questions in memory
    questions = await getAllQuestionsAndAnswers();
    // create a separate array with shuffled questions indexes
    questionsIndexesShuffled = shuffle(new Array(questions.length).fill(0).map((x, i) => i));
    // console.log("new", questionsIndexesShuffled);

    return getTopQuestionAndRemove();
}

function getTopQuestionAndRemove() {
    const questionIndexShuffled = questionsIndexesShuffled.shift();
    if (typeof questionIndexShuffled === "undefined") {
        throw new Error("no index")
    }
    return {questionText: questions[questionIndexShuffled].question, answer: questions[questionIndexShuffled].answer};
}

async function getAllQuestionsAndAnswers(): Promise<Question[]> {
    return new Promise((res, reject) => {
        fs.readFile(`${process.cwd()}/scripts/questions.csv`, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.split("\n");
                const result = lines.map(line => {
                    const [question, answer] = line.split(",");
                    return new Question(question, answer);
                })
                res(result);
            }
        });
    })
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: number[]) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
