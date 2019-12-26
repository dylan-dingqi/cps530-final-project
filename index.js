const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
app.set('view engine','ejs');
app.engine('html', ejs.renderFile);

app.set("view engine", ejs);

app.use('/public', express.static('public'));

// "/" = page1
app.get("/", (req, res) => {
    res.render("page1.html");
    // localhost:3000/
});

//installation = page2
app.get("/installation", (req, res) => {
    res.render("installation.html");
});

app.get("/installation-materialize", (req, res) => {
    res.render("installation-materialize.html");
});

app.get("/frontendsum", (req, res) => {
    res.render("frontendsum.html");
});

app.get("/page3", (req, res) => {
    res.render("page3.html");
});

app.get("/page4", (req, res) => {
    res.render("page4.html");
});

app.get("/page5", (req, res) => {
    res.render("page5.html");
});

app.get("/page6", (req, res) => {
    res.render("page6.html");
});

app.get("/bsummary", (req, res) => {
    res.render("bsummary.html");
});

app.get("/*", (req, res) => {
    res.status(404).render("errorPage.ejs");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});
