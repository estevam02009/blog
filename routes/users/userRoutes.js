const express = require('express')
const { 
    userRegisterCtrl, 
    userLoginCtrl, 
    usersCtrl, 
    userProfileCtrl,
    userUpdateCtrl,
    userDeleteCtrl
} = require('../../controllers/users/userCtrl')

const userRouter = express.Router()

// POST/api/v1/users/register
userRouter.post('/register', userRegisterCtrl)

// POST/api/v1/users/login
userRouter.post('/login', userLoginCtrl)

// GET/api/v1/users
userRouter.get('/', usersCtrl)

//GET/api/vi/users/profile/:id
userRouter.get('/profile/:id', userProfileCtrl)

//PUT/api/v1/users/:id
userRouter.put('/:id', userUpdateCtrl)

//DELETE/api/v1/users/:id
userRouter.delete('/:id', userDeleteCtrl)

module.exports = userRouter