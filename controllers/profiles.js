const Post = require('../models/post')

module.exports = {
    index,
    delete: deletePost
}

async function index (req, res) {
    try {
        const posts = await Post.find({'user':req.user.id});
        console.log(posts)
        res.render('profiles/index', {posts})
    } catch (err) {
        console.log(err)
        res.redirect('/posts')
    }
}

async function deletePost (req, res) {
    const post = await Post.findOneAndDelete({ '_id': req.params.id, 'user': req.user._id });
    if (!post) return res.redirect('/posts');
    res.redirect('/profiles')
}