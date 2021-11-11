const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product,
      through: {
        ProductTag
      }}]
    });
    res.status(200).json(allTags)
  } catch (err) {
    res.status(500).json(err); //Replace err for release build
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const selectedTag = await Tag.findByPk(req.params.id, {
      include: [{model: Product,
      through: {
        ProductTag
      }}]
    })

    if (!selectedTag) {
      res.status(404).json({ message: 'No entry found with this id!' });
      return;
    }

    res.status(200).json(selectedTag);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const newTagData = await Tag.update(req.body, {
      where: {id: req.params.id}
    });
    res.status(200).json(newTagData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagToDestroy = await Tag.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!tagToDestroy) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagToDestroy);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
