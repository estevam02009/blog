
//Register
const userRegisterCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "user registered"
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Login
const userLoginCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "user login route success",
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