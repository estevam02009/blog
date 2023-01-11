const { default: mongoose } = require('mongoose')
const tmongoose = require('mongoose')

// Create a Schema
const userSchema = new mongoose.Schema({
        firstname: {
            type: String,
            required: [true, 'First name is required'],
        }, 
        lastname: {
            type: String,
            required: [true, 'Last Name is required'],
        },
        profilePhoto: {
            type: String,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        postCount: {
            type: Number,
            default: 0,
        },
        isBlockead: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            deafult: false,
        },
        role: {
            type: String,
            enum: ["Admin", "Guest", "Editor"],
        },
        viewedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        active: {
            type: Boolean,
            deafult: true,
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            }
        ]
    },
    {
        timestamps: true,
    },
);

// Compile de User model
const User = mongoose.model('User', userSchema);

module.exports = User;