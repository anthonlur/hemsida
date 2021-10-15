
//Libs
const express = require('express');
const path = require('path');

//Variables
const app = express();
const port = process.env.PORT || 8000;

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

//Routes
const index = require('./routes/index');

//View enigne pug
app.set('view engine', 'pug');

//Start server
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});