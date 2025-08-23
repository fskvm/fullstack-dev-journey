//todo - GET -
// used to GET some response
// Data send in query strings(limited, string data & visible in URL)

//todo - POST -
// used to POST something (for Create/ Write/ Update)
// Data send via request body(any type of data)


const express = require('express');
const app = express();
const port = 3000;

//* Handling Post request
//? The below will only parse the data of url encoded from data.
app.use(express.urlencoded({extended: true})); //! Here express will parse the data from the body and make it available in the req.body object.

//? But below will parse the data of JSON form data.
app.use(express.json());


app.listen(port, () => {console.log(`Server is running on port ${port}`)});

app.get('/register', (req, res) => {
    let { username , password } = req.query;
    res.send(`Standard GET response,Welcome ${username}`);
});
app.post('/register', (req, res) => {
    console.log(req.body); // This will print undefined as we are not using body-parser, using app.use(express.urlencoded({extended: true})); then it will print the data to console as expected.
    let { username , password } = req.body;
    res.send(`Standard POST response, ${username}`);
});
