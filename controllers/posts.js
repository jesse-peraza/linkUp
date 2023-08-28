const Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    create,
    show
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'All Posts', posts });
}

async function newPost(req, res) {
    res.render('posts/new', { title: 'New Post', errorMsg: '' })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const post = await Post.create(req.body);
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        res.render('posts/new', { errorMsg: err.message });
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.render('posts/show', { title: 'Post Details', post });
    } catch (err) {
        console.log(err)
        res.render('/posts', { errorMsg: err.message })
    }
}