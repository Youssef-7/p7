const database = require("../config/database");
const bcrypt = require('bcrypt');
const user_model = require('../models/user_model');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
var passwordParams = new passwordValidator();
// passwordParams
// .is().min(8)                                    // Minimum 8 caractères,                                 
// .has().uppercase()                              // Majuscule obligatoire,
// .has().lowercase()                              // Minuscule obligatoire,
// .has().digits(2)                                // 2 chiffres,
// .has().not().spaces();                         // Pas d'espaces


exports.signup = (req, res, next) => {
  //VERIFIER SI lusager existe (erreur ou continuation pour lemail address et pseudoq)
  if (!passwordParams.validate(req.body.u_pwd)) {
    console.log("Invalid password");
    return res.status(400).json({ message: 'Veulliez renseigner un mot de pass valide avec au minimum : 8 caractères, une majuscule, une minuscule, 2 chiffre et sans espace'});
  }     //end if
  else if (passwordParams.validate(req.body.u_pwd)) {
  bcrypt.hash(req.body.u_pwd, 10)
    .then(hash => {
      user_model.insertUser ({
        u_pseudo: req.body.u_pseudo,
        u_email: req.body.u_email,
        u_pwd: hash
      }, (err, results) => {
        if (err)  res.status(500).json({err})
        else res.status(201).json('Utilisateur créé !');
      });
    })
    .catch(error => res.status(500).json({ error }));
};
} // End exports.signup


// exports.login = (req, res, next) => {
//   user_model.getUsers( req.body.u_email, (err, results) => {
//           if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 exports.login = async (req, res, next) => {
    try {
        let email = req.body.u_email;
        const pwd = req.body.u_pwd;
        if (!email || !pwd) {  res.status(400).json(`${!email ? "email" : "pwd"} manquant`); return; }
        user_model.getUserByEmail(email, (err, results) => {
            try {
                bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                if (!valid) {
                    return res.status(401).json({error: "Mot de passe incorrect"});
                }
                res.status(200).json({
                    userId: results[0].u_id,
                    token: jwt.sign (
                        { userId: results[0].u_id },
                        'RANDOM_TOKEN_SECRET', // clé secrète de l'encodage - en production : 'string' longue et aléatoire
                        { expiresIn: '24h' }
                        )
                    });
                })
                .catch(err => res.status(500).json({ err }));
            } catch (error) {
                return res.status(404).json({error: "Utilisateur non trouvé"});
            }
        });
    } catch (error) {
        res.status(403).json({ error: 'requête non autorisée'});
    }
};