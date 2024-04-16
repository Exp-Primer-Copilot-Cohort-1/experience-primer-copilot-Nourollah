// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise. 
// When you navigate to http://localhost:3000, you should see the comments.html file. 
// When you submit the form on the comments.html page, you should see the form data printed to the console.

// The comments.html file should have a form with two inputs, name and comment, and a submit button. 
// When the form is submitted, it should make a POST request to the server with the form data. 
// You can use the comments.js file from the previous exercise as a starting point.

// Hint: You can use the express.urlencoded middleware to parse form data.

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
