
// create
const createCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Comment route created success",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Update
const updateCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update comments route success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Delete
const deleteCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete comment route success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createCommentCtrl,
    updateCommentCtrl,
    deleteCommentCtrl
}