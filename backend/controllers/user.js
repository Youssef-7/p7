const database = require("../config/database");
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
      User.insertUser ({
        u_pseudo: req.body.u_pseudo,
        u_email: req.body.u_email,
        u_pwd: hash
      }, (err, results) => {
        if (err) res.status(500).json({err})
        else res.status(201).json('Utilisateur créé !');
      })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error: "1"}));
};
} // End else if
exports.login = (req, res, next) => {
  User.getUsers({ u_email: req.body.u_email })
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
            userId: user.u_id,
            token: jwt.sign(
              // { userId: user._id, + pseudo},
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error:"2"}));
    })
    .catch(error => res.status(500).json({ error:"3" }));
};