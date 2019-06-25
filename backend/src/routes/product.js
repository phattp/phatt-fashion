const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const slugify = require("slugify");
const User = require("../models/user");
const Product = require("../models/product");
const auth = require("../middleware/auth");
const router = new express.Router();

// Upload images function
const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image."));
    }

    cb(undefined, true);
  }
});

// Define escapeRegex function for search feature
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Create product
router.post("/products", auth, async (req, res) => {
  const product = new Product({
    ...req.body,
    owner: req.user._id
  });

  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read products
// GET /products?completed=true
// GET /products?limit=10&skip=0
// GET /products?sortBy=createdAt:desc
router.get("/products", async (req, res) => {
  let sort = "";

  // Check sort value
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort = parts[1] === "desc" ? -1 : 1;
  }

  try {
    // Use RegExp to check search from req.query
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");

      // Find products that match search term
      const products = await Product.find({ name: regex })
        .sort({ createdAt: sort })
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.skip));

      res.send(products);
    } else {
      // Find all products if user doesn't provide the search term
      const products = await Product.find({})
        .sort({ createdAt: sort })
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.skip));

      res.send(products);
    }
  } catch (error) {
    res.status(500).send();
  }
});

// Read product
router.get("/products/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
});

// Update product
router.patch("/products/:slug", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "productCode",
    "sku",
    "name",
    "description",
    "costPrice",
    "sellingPrice",
    "category",
    "color",
    "size"
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates." });
  }

  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      return res.status(404).send();
    }

    updates.forEach(update => (product[update] = req.body[update]));
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete product
router.delete("/products/:slug", auth, async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug });

    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
});

// Upload product images
router.post(
  "/products/:slug/images",
  auth,
  upload.array("images", 10),
  async (req, res) => {
    const buffers = req.files.map(image => image.buffer);
    const product = await Product.findOne({ slug: req.params.slug });
    product.images = product.images.concat(buffers);
    await product.save();
    res.send(product);
    try {
    } catch (error) {}
  }
);

module.exports = router;
