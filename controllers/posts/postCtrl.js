

// Create
const createPostCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post created route success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// All
const fetchPostsCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Posts all route success"
        })
    } catch (error) {
        
    }
}

// Details
const postDetailCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post details route success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Update
const updatePostCtyrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post update route success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Delete
const deletePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "deelete post route success",
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createPostCtrl,
    fetchPostsCtrl,
    postDetailCtrl,
    updatePostCtyrl,
    deletePostCtrl
}