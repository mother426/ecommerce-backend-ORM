const router = require("express").Router();
const { Category, Product, Tag } = require("../../models");

// api/categories

// find all categories
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// category by id
router.get("/:id", async (req, res) => {
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryById) {
      res.status(404).json({ message: "No category with this ID found." });
    }
    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update category by id
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category with this ID found.'});
    }
    res.send(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete category by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.send(200).json(deletedCategory);
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
