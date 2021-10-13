import db from "../config/database.js";
 
// Get  post initiaux (debut de conversation)
export const getPost = (result) => {
    db.query("SELECT p_id, p_titre, p_date_published  FROM post_messages WHERE p_parent = 0 ORDER BY p_date_published DESC;", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single post
export const getPostById = (id, result) => {
    db.query("SELECT * FROM post_messages WHERE p_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert post to Database
export const insertPost = (data, result) => {
    db.query("INSERT INTO post_messages SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Post to Database
export const updatePostById = (data, id, result) => {
    db.query("UPDATE post_messages SET p_titre = ?, p_text = ?, p_image_url = ? WHERE p_id = ? ", [data.p_titre, data.p_text, data.p_image_url, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Post to Database
export const deletePostById = (id, result) => {
    db.query("DELETE FROM post_messages WHERE p_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}