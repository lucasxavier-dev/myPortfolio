const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', '.njk');

nunjucks.configure('views', { //diretory
    express: server, //servidor
    autoescape: false, //control output with danger caracter
    noCache: true, //changer archivos and no restart the server
});


server.get("/", function (req, res) {
    return res.render("home")
});

server.get("/projects", function (req, res) {
    return res.render("projects")
});

server.get("/about", function (req, res) {
    return res.render("about")
});

server.get("/contact", function (req, res) {
    return res.render("contact")
});

server.listen(5000, function () {
    console.log('Server on!')
});

