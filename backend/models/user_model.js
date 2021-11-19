const db = require('../config/database');
 
// Get  post initiaux (debut de conversation)

exports.insertUser = (data, result) => {
     db.query(
    //UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => { 
      // "INSERT INTO usagers (u_pseudo, u_email, u_pwd,) VALUES (?,?,?)"
      "INSERT INTO usagers SET u_pseudo = ?, u_email = ?, u_pwd = ?", [data.u_pseudo, data.u_email, data.u_pwd],(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single post
exports.getUsers = (data, result) => {
      db.query( "SELECT * FROM usagers WHERE u_email = ?;", [data.u_email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 