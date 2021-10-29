const db = require('../config/database');
 
// Get  post initiaux (debut de conversation)

exports.insertUser = (data, result) => {
     db.query(
      "INSERT INTO usagers  (u_pseudo, u_email, u_pwd, ) VALUES (?,?,?)", [data],(err, results) => {             
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
 