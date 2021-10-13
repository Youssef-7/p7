import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'usr_main_p7',
  password: 'pwd_main_p7',
  database: 'pos_db'
});
 
export default db;