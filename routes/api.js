const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const accessibleUrl = {
    //origin: 'http://localhost:3000',
    origin: 'https://mural-de-avisos-omega.vercel.app',
}
router.use(cors(accessibleUrl));

const posts = require('../model/posts');

router.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization");
    next();
});

router.get('/', (req, res) => {
    res.send("TESTE");
})

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