const express = require('express');
let app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {res.send("you are at root path")});

//* Path Parameters - They are used to pass dynamic values in the URL. They are defined using a colon (:) followed by the parameter name in the route path. We can also pass multiple parameters in the URL.
//* If only one parameter is provided, the two-segment route "/:username/:id" will not match.
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let HtmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(HtmlStr);
});

//* Query Strings - They are used to pass additional information in the URL. They are defined using a question mark (?) followed by the key-value pairs in the URL(But start with always q=value). An ampersand (&) can separate multiple key-value pairs(key1=value1&key2=value2).
app.get("/search", (req, res) => {
    console.log(req.query); //? This will show the query string in the terminal, which is the part after the question mark in the URL.
    let { q } = req.query;
    if (!q) {
        return res.send("Please provide a search query");
    }
    res.send(`<h1>You searched for ${q}</h1>`);
});
