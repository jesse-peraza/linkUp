const Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    create,
    show,
    // profile
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
    console.log(req.body)
    req.body.user = req.user.id
    try {
        const post = await Post.create(req.body);
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        res.redirect('posts/new');
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.render('posts/show', { title: 'Post Details', post });
    } catch (err) {
        console.log(err)
        res.redirect('/posts')
    }
}

// async function profile(req, res) {
//     console.log('profile')
//     try {
//         const posts = await Post.find({'user':req.user.id});
//         console.log(posts)
//         res.render('profile/profile', {posts})
//     } catch (err) {
//         console.log(err)
//         res.redirect('/posts')
//     }
// }

