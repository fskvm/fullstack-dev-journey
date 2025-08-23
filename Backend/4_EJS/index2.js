
const express = require('express');
const app = express();
const path = require('path');

//? Express has a built-in middleware called static that can be used to serve static files. Static is used to serve static files like CSS, js, images etc as they are middlewares like a waiter in a restaurant. By default, it serves files from the public directory.
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

let port = 8080;

app.listen(port, () => {console.log(`Server is running on port ${port}`)});

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    if(data) {
        res.render("instagram2.ejs", { data });
    } else {
        res.render("error.ejs")
    }
});