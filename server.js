/*
  name: Adrien Protzel
  email: protzela@oregonstate.edu
*/

var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var homePostData = require('./homePostData');
var contactPostData = require('./contactPostData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.status(200).render('homePage', {
    pageTitle: "Proelian",
    pageDes: "Advanced Energy Technologies",
    allHomePosts: homePostData
  });
});

app.get('/contacts', function (req, res, next) {
  res.status(200).render('contactsPage', {
    pageTitle: "Contacts",
    pageDes: "Contact Us",
    allContacts: contactPostData
  });
});

app.get('*', function (req, res, next) {
  res.status(404).render('404', {
    pageTitle: "404",
    pageDes: "Woops! We couldn't find that page."
  });
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
})
