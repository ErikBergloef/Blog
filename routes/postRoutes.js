const express = require('express');
const { getAllPosts, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts); // Hämta alla posts
router.post('/', createPost); // Skapa en ny post
router.put('/:id', updatePost); // Uppdatera en post
router.delete('/:id', deletePost); // Ta bort en post

module.exports = router;
