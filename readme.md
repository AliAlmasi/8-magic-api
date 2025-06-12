# 8-magic-api ([GitHub repo](http://github.com/alialmasi/8-magic-api))

This is the backbone of the [8-magic](#) project (WIP).

This API returns a random answer for questions asked by the user.  
You can either use the [8-magic](#), or use this API and enjoy using it in your application.

All data and functions are in `/utils` directory.

## Development

Run a dev server using `npm run dev` and then open up [http://localhost:1245](http://localhost:1245)

## Endpoints

Use [`/getAnswer`](http://localhost:1245/getAnswer) to get a random answer for your question, or use [`/allAnswers`](http://localhost:1245/allAnswers) to view all answers.

The `/getAnswer` accepts both GET & POST methods and you can also send the question to be included in the response. In GET is it received via URL query.

> _e.g._ via GET: `/getAnswer?question=your_question` or via POST: `/getAnswer -- POST body: { question: "your_question" }`

The `/allAnswers` only accepts GET method and the only query it accepts is the category of the answers

> _e.g._ `/allAnswers?type={ positive | neutral | negative }`
