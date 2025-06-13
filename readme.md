# 8-magic-api ([GitHub repo](http://github.com/alialmasi/8-magic-api))

This is the backbone of the [8-magic](#) project (WIP).

This API returns a random answer for questions asked by the user.  
You can either use the [8-magic](#), or use this API and enjoy using it in your application.

All data and functions are in `/utils` directory.

## Development

Run a dev server using `npm run dev` and then open up [http://localhost:1245](http://localhost:1245).

You can access the endpoints locally on localhost:1245[/getAnswer](http://localhost:1245/getAnswer) and [/allAnswers](http://localhost:1245/allAnswers).

## Endpoints

Use [`/getAnswer`](http://api.8.alialmasi.ir/getAnswer) to get a random answer for your question, or use [`/allAnswers`](http://api.8.alialmasi.ir/allAnswers) to view all answers.

The `/getAnswer` accepts both GET & POST methods and you can also send the question to be included in the response. In GET is it received via URL query.

> _e.g._ via GET: `/getAnswer?question=your_question` or via POST: `/getAnswer -- POST body: { question: "your_question" }`

The `/allAnswers` only accepts GET method and the only query it accepts is the category of the answers

> _e.g._ `/allAnswers?type={ positive | neutral | negative }`

## Bugs and errors

Found a bug? Faced an error? You can always [submit a new issue on GitHub](https://github.com/AliAlmasi/8-magic-api/issues/new).

You can also contact me by email ([a710almasi@gmail.com](mailto:a710almasi@gmail.com)) or other links in [my webpage](https://alialmasi.ir).

## License

This (Sub)Project is licensed with [GNU GPL3 License](https://github.com/AliAlmasi/8-magic-api/blob/main/LICENSE).
