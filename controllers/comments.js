const Post = require('../models/post');

module.exports = {
    create,
    // delete: deleteComment
};

async function create (req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    post.comments.push(req.body);
    try {
        await post.save();
    } catch (err) {
          console.log(err);
    }
    res.redirect(`/posts/${post._id}`);
}

// async function deleteComment (req, res) {
//     const post = await Post.findOneAndDelete({ 'comments._id': req.params.id, 'comments.user': req.user._id });
//     if (!post) return res.redirect('/posts');
//     post.comments.remove(req.params.id);
//     await post.save()
//     res.redirect('/posts')
// }
