const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
