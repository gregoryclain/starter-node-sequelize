const db = require('../models')

const Post = db.posts;

// 1 create post
const addPost = async (req, res) => {
  let info = {
    title: req.body.title,
    description: req.body.description,
  }

  const post = await Post.create(info)
  res.status(200).send(post);

}

// 2 get all posts
const getAllPosts = async (req, res) => {
  let posts = await Post.findAll({})
  res.status(200).send(posts);
}

module.exports = {
  getAllPosts,
  addPost,
}