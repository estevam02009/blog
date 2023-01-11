const express = require('express');
const { createCommentCtrl, updateCommentCtrl, deleteCommentCtrl } = require('../../controllers/comments/commentCtrl');

const commentRouter = express.Router()

//POST/api/v1/comments
commentRouter.post('/', createCommentCtrl)
//PUT/api/v1/comments/:id
commentRouter.put('/:id', updateCommentCtrl)
//DELETE/api/v1/comments/:id
commentRouter.delete('/:id', deleteCommentCtrl);

module.exports = commentRouter