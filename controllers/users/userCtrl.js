const bcrypt = require('bcryptjs')

const User = require('../../model/User/User')
const generateToken = require('../../utils/generateToken')

//Register
const userRegisterCtrl = async (req, res) => {

    const {firstname, lastname, profilePhoto, email, password} = req.body

    try {
        // check if email exist
        const userFound = await User.findOne({email})
        if (userFound) {
            return res.json({
                msg: "User Alread Exist"
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create the user
        const user = await User.create({
            firstname, 
            lastname, 
            email, 
            password: hashedPassword
        })
        res.json({
            status: "success",
            data: user,
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Login
const userLoginCtrl = async (req, res) => {
    
    const {email, password} = req.body
    // Check if email exist

    try {
        // Check if email 
        const userFound = await User.findOne({ email })
        if (!userFound) {
            return res.json({
                msg: "Invalid login credentials"
            })
        }

        // Verify password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password)

        if (!isPasswordMatched) {
            return res.json({
                msg: "Invalid login credentials"
            })
        }

        res.json({
            status: "success",
            data: {
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id),
            },
        })
    } catch (error) {
        res.json(error.message)
    }
}

// All
const usersCtrl = async (req, res) => {
    try {
        res.send({
            status: "success",
            data: "All ussers route success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Profile
const userProfileCtrl = async (req, res) => {
    
    const {id} = req.params
    try {

        const user = await User.findById(id)
        res.json({
            sttaus: "success",
            data: user,
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Update
const userUpdateCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Update user route success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Delete
const userDeleteCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "dlete user router",
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    usersCtrl,
    userProfileCtrl,
    userUpdateCtrl,
    userDeleteCtrl
}