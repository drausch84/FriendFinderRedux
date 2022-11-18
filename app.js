/* Import dotenv for user vars */
require('dotenv').config();
/* Import Express for Route Handling */
const express = require('express');
/* Import Body Parser */
const bodyParser = require('body-parser');

/* Create Express Server */
const app = express();

/* Use Public Assets */
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));

/* Middleware Configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Use Routes in Application */
require("./routing/apiRoutes")(app);
require("./routing/getRoutes")(app);

/* Start Server */
const port = process.env.PORT;
app.listen(port, () =>{
    console.log("> Server is live and running...");
});