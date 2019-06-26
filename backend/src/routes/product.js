const fs = require("fs");
const express = require("express");
const multer = require("multer");
const path = require("path");
const Product = require("../models/product");
const auth = require("../middleware/auth");
const router = new express.Router();

// Storage Engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "media/images/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// Upload images function
const upload = multer({
  storage,
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

// Create product
router.post("/products", auth, upload.array("images", 10), async (req, res) => {
  if (!req.files) {
    return res
      .status(400)
      .send({ error: "Please choose images before upload" });
  }

  const images = req.files.map(image => image.destination + image.filename);

  const product = new Product({
    ...req.body,
    images,
    owner: req.user._id
  });

  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Define escapeRegex function for search feature
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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
router.patch(
  "/products/:slug",
  auth,
  upload.array("images", 10),
  async (req, res) => {
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

      // Check if product doesn't exist
      if (!product) {
        // Delete image in that just uploaded if product doesn't exist
        req.files.forEach(file => fs.unlinkSync(file.path));

        // Return 404 status code (product not found)
        return res.status(404).send();
      }

      // perform update when product exists.
      updates.forEach(update => (product[update] = req.body[update]));

      // Perform update images
      const images = req.files.map(image => image.destination + image.filename);
      product.images = product.images.concat(images);

      // Save updated product to database
      await product.save();

      // Send 200 status code with updated product
      res.send(product);
    } catch (error) {
      // Send 400 status code when error
      res.status(400).send(error);
    }
  }
);

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
    if (!req.files) {
      return res
        .status(400)
        .send({ error: "Please choose images before upload" });
    }

    const images = req.files.map(image => image.destination + image.filename);

    const product = await Product.findOne({ slug: req.params.slug });
    product.images = product.images.concat(images);
    await product.save();
    res.send(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// Delete specific image by image name
router.delete("/products/:slug/images/:imageName", auth, async (req, res) => {
  try {
    const fullImageName = `media/images/${req.params.imageName}`;
    const product = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      {
        $pull: { images: fullImageName }
      },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
