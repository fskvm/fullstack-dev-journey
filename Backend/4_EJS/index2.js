
const express = require('express');
const app = express();
const path = require('path');

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