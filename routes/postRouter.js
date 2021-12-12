const postController = require('../controllers/postController');

const router = require('express').Router()

router.post('/add', postController.addPost);
router.get('/all', postController.getAllPosts);

module.exports = router;