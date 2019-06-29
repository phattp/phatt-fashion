const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");
const auth = require("../middleware/auth");
const router = new express.Router();

// Create order
router.post("/orders", async (req, res) => {
  const order = new Order({
    ...req.body
  });

  try {
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("product name")
      .exec((err, product) => {
        if (err) return handleError(err);
        res.send(product);
      });
  } catch (error) {
    res.status(500).send();
  }
});

// Read order by id

// Update order

// Delete order

module.exports = router;
