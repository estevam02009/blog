const express = require('express')
const { 
    createPostCtrl, 
    fetchPostsCtrl, 
    postDetailCtrl, 
    updatePostCtyrl, 
    deletePostCtrl 
} = require('../../controllers/posts/postCtrl')

const postRouter = express.Router()

//POST/api/v1/posts
postRouter.post('/', createPostCtrl)
//GET/api/v1/posts
postRouter.get('/', fetchPostsCtrl)
//GET/api/v1/posts/:id
postRouter.get('/:id', postDetailCtrl)
//PUT/api/v1/posts/:id
postRouter.put('/:id', updatePostCtyrl)

//GET/api/vi/posts/:id
postRouter.delete('/:id', deletePostCtrl);

module.exports = postRouter