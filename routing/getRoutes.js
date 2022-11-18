const path = require('path');

module.exports = function(app){
    app.get('/', (req, res) =>{
        res.sendFile(path.join(__dirname, "/../views/home.html"));
    });

    app.get('/survey', (req, res) =>{
        res.sendFile(path.join(__dirname, "/../views/survey.html"));
    });

    app.get('/about', (req, res) =>{
        res.sendFile(path.join(__dirname, "/../views/about.html"));
    });

    app.get('/contact', (req, res) =>{
        res.sendFile(path.join(__dirname, "/../views/contact.html"))
    })

    //404 page redirect
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../views/404.html"));
      });
}