// import express
import express from "express";
 
// import function from controller
import { showPost, showPostById, createPost, updatePost, deletePost } from "../controllers/post.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/post', showPost);
 
// Get Single Product
router.get('/post/:id', showPostById);
 
// Create New Product
router.post('/post', createPost);
 
// Update Product
router.put('/post/:id', updatePost);
 
// Delete Product
router.delete('/post/:id', deletePost);
 
// export default router
export default router;