// import { getPost, getPostById, insertPost, updatePostById, deletePostById } from "../models/post.js";
const post = require('../models/post');

// Get All posts
exports.showPost = (req, res) => {
    post.getPost((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single post 
exports.showPostById = (req, res) => {
    post.getPostById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New post
exports.createPost = (req, res) => {
    const data = req.body;
    post.insertPost(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update post
exports.updatePost = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    post.updatePostById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete post
exports.deletePost = (req, res) => {
    const id = req.params.id;
    post.deletePostById (id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}