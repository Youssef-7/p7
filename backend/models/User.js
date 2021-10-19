const db = require('../config/database');
 
// Get  post initiaux (debut de conversation)

exports.insertUser = (u_email, hash, result) => {
     db.query(
      "INSERT INTO usagers  (u_id, u_pseudo, u_email, u_pwd, u_role, u_date_registered) VALUES (?,?)", [u_email, hash],(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single post
exports.getUsers = (u_email, result) => {
      db.query( "SELECT * FROM usagers WHERE u_email = ?;", [u_email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 