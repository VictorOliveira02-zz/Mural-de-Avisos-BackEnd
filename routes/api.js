const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(cors());

const posts = require('../model/posts');

router.get('/all', (req, res) => {
    res.send(posts.getAll());
})

router.post('/new', (req, res) => {
    let newTitle = req.body.title;
    let newDescription = req.body.description;

    posts.newPost(newTitle, newDescription);
    res.send('Post Added!');
})

router.delete('/delete', (req, res) => {
    const idItem = req.body.id;
    posts.deletePost(idItem);
    res.send(`idPost ${idItem} Delete!`);
})

module.exports = router;