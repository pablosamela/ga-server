'use strict'
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

var router = express.Router();
var app = express();

router.post('/subscription',  (req, res, next) => {
  var email = req.body.email;
  console.log("Email = " + email );
  if(email === 'a@a.com'){
    res.status(408).send({ error: 'Something failed!' });
  } else {
    res.end("yes");
  }
 }); 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', [router]);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});