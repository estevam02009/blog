const User = require('../../model/User/User')

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

        // Create the user
        const user = await User.create({
            firstname, lastname, email, password
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
                msg: "Invalid login credentials",
            })
        }
        // validity password
        const isPasswordMatched = await User.findOne({ password })
        if (!isPasswordMatched) {
            return res.json({
                msg: "Invalid login Credentials"
            })
        }

        res.json({
            status: "success",
            data: "user login",
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
    try {
        res.json({
            sttaus: "success",
            data: "profile router success",
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