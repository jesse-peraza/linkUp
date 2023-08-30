const Post = require('../models/post')

module.exports = {
    index
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