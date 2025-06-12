import allAnswers, { AnswerObject } from "./answers";

/**
 * @typedef {object} AnswerObject
 * @property {string} answer - The answer text.
 * @property {string} type - The type of answer (positive, neutral, negative).
 * @property {string} emoji - The emoji associated with the answer.
 */

/**
 * Selects pipe character (|) multi-line globally. Used for inserting HTML breaks in answer strings
 */
const breaksRegex: RegExp = /[|]/gm;

/**
 * @param {Boolean} breaks - (Default: false) Adds HTML breaks to the answer.
 *
 * @returns {AnswerObject} A random answer-object with the answer and type.
 *
 * @see `/src/utils/answers.js` for the list of answers.
 */
export const randomAnswer = (breaks: boolean = false): AnswerObject => {
  const { id, answer, type, emoji } =
    allAnswers[Math.floor(Math.random() * allAnswers.length)];

  return {
    id,
    answer: answer.replaceAll(breaksRegex, breaks ? "<br>" : " "),
    type,
    emoji,
  };
};
