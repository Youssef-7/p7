const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors');
const helmet = require("helmet");



const app = express();
app.use(cors());

app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/messages/", postRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;