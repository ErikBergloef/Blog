const express = require('express');
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts); // Hämta alla posts
router.get('/:id', getPostById); // Hämta en specifik post
router.post('/post', createPost); // Skapa en ny post
router.put('/:id', updatePost); // Uppdatera en post
router.delete('/:id', deletePost); // Ta bort en post

module.exports = router;
