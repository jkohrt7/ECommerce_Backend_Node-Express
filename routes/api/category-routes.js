const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err); //Replace err for release build
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const selectedCategory = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })

    if (!selectedCategory) {
      res.status(404).json({ message: 'No entry found with this id!' });
      return;
    }

    res.status(200).json(selectedCategory);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    
  } catch (err) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    
  } catch (err) {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch (err) {
    
  }
});

module.exports = router;
