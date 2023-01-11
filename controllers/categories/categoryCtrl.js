

// Create
const createCategoryCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category created with success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

// All
const fetchCategoriesCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category route success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Update
const updateCategoryCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update category route success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Delete
const deleteCategoryCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete category route with success 2",
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createCategoryCtrl,
    fetchCategoriesCtrl,
    updateCategoryCtrl,
    deleteCategoryCtrl
}