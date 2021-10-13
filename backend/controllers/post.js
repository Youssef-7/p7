import { getPost, getPostById, insertPost, updatePostById, deletePostById } from "../models/post.js";
 
// Get All posts
export const showPost = (req, res) => {
    getPost((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single post 
export const showPostById = (req, res) => {
    getPostById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New post
export const createPost = (req, res) => {
    const data = req.body;
    insertPost(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update post
export const updatePost = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePostById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete post
export const deletePost = (req, res) => {
    const id = req.params.id;
    deletePostById (id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}