export type answerObject = {
  id: string;
  answer: string;
  type: string;
  emoji: string;
};

export type POSTbody = {
  question?: string;
  q?: string;
};

export type headersObject = { [key: string]: string };

export type httpOptionsObject = {
  status: number;
  statusText: string;
  headers: headersObject;
};
