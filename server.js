const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const contentModal = require('./data')

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

// server.get("/video", function (req, res) {
//     const id = req.query.id;
//                             //find - encontrar
//         const video = videos.find(function (video){
//             if (video.id == id) {
//                 return true;
//             }
//         });

//         if (!video) {
//             return res.send("Content not found!")
//         }
    
//     return res.render("video", { video });
// });

server.get("/projects", function (req, res) {
    return res.render("projects", {items: contentModal})
});

server.get("/about", function (req, res) {

    const about = {
        avatarUrl: "https://user-images.githubusercontent.com/61753821/103354040-43004c00-4a89-11eb-88e3-cb43f69c5584.jpg",
        name: "Lucas Xavier",
        role: 'CEO and CTO at <a href="https://compare.com.br" target="_blank">@Compare</a>',
        description: "This is my name. Yeah, my is comum and I am the best programmer on the world (rs). i'm not the best programmer on the world. But, i love this... programming, solving problems and create solutions to problems."
    }


    return res.render("about", { about });
});

server.get("/contact", function (req, res) {
    return res.render("contact")
});

server.listen(5000, function () {
    console.log('Server on!')
});

