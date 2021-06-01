const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //// find all categories
  Category.findAll({
    order: ['category_name']
  })
  //// be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  //// find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  //// be sure to include its associated Products
});

router.post('/', (req, res) => {
  //// create a new category
  Category.create({
    catagory_name: req.body.catagory_name
  })
  .then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  //// update a category by its `id` value
    Category.update(
    {
      catagory_name: req.body.catagory_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.delete('/:id', (req, res) => {
  //// delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedCategory) => {
      res.json(deletedCategory)
    })
    .catch((err) => {
      res.json(err)
    })
});

module.exports = router;
