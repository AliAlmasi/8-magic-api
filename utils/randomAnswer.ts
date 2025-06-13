import allAnswers from "./answers";
import { answerObject } from "./types";

/**
 * Selects pipe character (|) multi-line globally. Used for inserting HTML breaks in answer strings
 */
const breaksRegex: RegExp = /[|]/gm;

/**
 * @param {Boolean} breaks - (Default: false) Adds HTML breaks to the answer.
 *
 * @returns {answerObject} A random answer-object with the answer and type.
 *
 * @see `/app/utils/answers.js` for the list of answers.
 */
export const randomAnswer = (breaks: boolean = false): answerObject => {
  const { id, answer, type, emoji } =
    allAnswers[Math.floor(Math.random() * allAnswers.length)];

  return {
    id,
    answer: answer.replaceAll(breaksRegex, breaks ? "<br>" : " "),
    type,
    emoji,
  };
};
