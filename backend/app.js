const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/Sauce');
const userRoutes = require('./routes/User');
const path = require('path');
const cors = require('cors');
const helmet = require("helmet");


mongoose.connect('mongodb+srv://piquant01:piquant01@cluster1.e2ogl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

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