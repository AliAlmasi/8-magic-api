let id = 0;

/**
 * @typedef {object} AnswerObject
 * @property {string} id - The ID of the answer.
 * @property {string} answer - The answer text.
 * @property {string} type - The type of answer (positive, neutral, negative).
 * @property {string} emoji - The emoji associated with the answer.
 */
export type AnswerObject = {
  id: string;
  answer: string;
  type: string;
  emoji: string;
};

/**
 * @returns {AnswerObject[]} An array of positive answer objects.
 */
export const positiveAnswers = [
  "Without|a doubt",
  "Yes,|definitely",
  "You may|rely on it",
  "As I|see it,|yes",
  "Most|likely",
  "Signs point|to yes",
  "It is|certain",
].map((answer) => {
  return {
    id: `${++id}`,
    answer: answer,
    type: "positive",
    emoji: "👍",
  };
});

/**
 * @returns {AnswerObject[]} An array of neutral answer objects.
 */
export const neutralAnswers = [
  "Reply hazy,|try again",
  "Ask again|later",
  "Better not|tell you now",
  "Cannot|predict now",
  "Concentrate|and ask again",
  "I'm not sure|right now",
  "Maybe,|IDK",
].map((answer) => {
  return {
    id: `${++id}`,
    answer: answer,
    type: "neutral",
    emoji: "🤷",
  };
});

/**
 * @returns {AnswerObject[]} An array of negative answer objects.
 */
export const negativeAnswers = [
  "Don't count|on it",
  "My reply is|no",
  "My sources|say no",
  "Outlook not|so good",
  "Very|doubtful",
  "Don't think|about it",
  "Not a|chance",
].map((answer) => {
  return {
    id: `${++id}`,
    answer: answer,
    type: "negative",
    emoji: "👎",
  };
});

/**
 * An array consisting of all answer objects.
 */
const allAnswers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers];

export default allAnswers;
