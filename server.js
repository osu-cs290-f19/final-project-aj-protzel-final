/*
  name: Adrien Protzel
  email: protzela@oregonstate.edu
*/

var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var postData = require('./postData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static('public'));

var title;
var des;

app.get('/', function (req, res, next) {
  title = "Proelian";
  des = "Advanced Energy Technologies";
  res.status(200).render('homePage', {title: title, des: des});
});

app.get('/contacts', function (req, res, next) {
  title = "Contacts";
  des = "Contact Us";
  res.status(200).render('homePage', {title: title, des: des});
});

app.get('/posts/:item', function (req, res, next) {
  var item = req.params.item;
  item = parseInt(item, 10);
  if (Number.isInteger(item) && item <= 7 && item >= 0) {
    res.status(200).render('homePage', {posts: postData[item]});
  } else {
    next();
  }
});

app.get('*', function (req, res, next) {
  title = "404";
  des = "Woops! We couldn't find that page.";
  res.status(404).render('404', {title: title, des: des});
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
})
