const express = require('express');
const { 
    createCategoryCtrl, 
    fetchCategoriesCtrl, 
    updateCategoryCtrl, 
    deleteCategoryCtrl 
} = require('../../controllers/categories/categoryCtrl');

const categoryRouter = express.Router()

//POST/api/v1/categories
categoryRouter.post('/', createCategoryCtrl);
//GET/api/v1/categories/:id
categoryRouter.get('/', fetchCategoriesCtrl);
//PUT/api/v1/categories/:id
categoryRouter.put('/:id', updateCategoryCtrl);
//DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', deleteCategoryCtrl);

module.exports = categoryRouter