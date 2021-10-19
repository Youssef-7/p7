const database = require("../config/database");
const user = require("../models/user");
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
var passwordParams = new passwordValidator();
passwordParams
.is().min(8)                                    // Minimum 8 caractères,                                 
.has().uppercase()                              // Majuscule obligatoire,
.has().lowercase()                              // Minuscule obligatoire,
.has().digits(2)                                // 2 chiffres,
.has().not().spaces();                         // Pas d'espaces


exports.signup = (req, res, next) => {
  if (!passwordParams.validate(req.body.u_pwd)) {
    return res.status(400).json({ message: 'Veulliez renseigner un mot de pass valide avec au minimum : 8 caractères, une majuscule, une minuscule, 2 chiffre et sans espace'});
  }     //end if
  else if (passwordParams.validate(req.body.u_pwd)) {
  bcrypt.hash(req.body.u_pwd, 10)
    .then(hash => {
      const user = new User({
        u_email: req.body.u_email,
        u_pwd: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
} // End else if
exports.login = (req, res, next) => {
  User.findOne({ u_email: req.body.u_email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.u_pwd, user.u_pwd)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: u_id,
            token: jwt.sign(
              // { userId: user._id, + pseudo},
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};