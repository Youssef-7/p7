// import express
const express = require('express');

 
// import function from controller
const postCtrl = require('../controllers/post');

 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/post', postCtrl.showPost);
 
// Get Single Product
router.get('/post/:id', postCtrl.showPostById);
 
// Create New Product
router.post('/post', postCtrl.createPost);
 
// Update Product
router.put('/post/:id', postCtrl.updatePost);
 
// Delete Product
router.delete('/post/:id', postCtrl.deletePost);
 
// export default router
module.exports = router;