const Post = require('../models/post')

module.exports = {
    index,
    delete: deletePost,
    edit,
    update
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

async function edit (req, res) {
    const post = await Post.findOne({ '_id': req.params.id, 'user': req.user._id });
    if (!post) return res.redirect('/posts');
    res.render('profiles/edit', { post });
}

async function update (req, res) {
    try {
        const updatedPost = await Post.findOneAndUpdate(
          { '_id': req.params.id, 'user': req.user._id },
          req.body,
          {new: true}
        );
        return res.redirect(`/posts/${updatedPost._id}`);
    } catch (err) {
        console.log(err);
        return res.redirect('/profiles');
    }
}