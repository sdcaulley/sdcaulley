const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const users = require('./routes/user-route');
const tags = require('./routes/tag-route');
require('./passport')(passport);

app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', users);
app.use('/tag', tags);

module.exports = app;
