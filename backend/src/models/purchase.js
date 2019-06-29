const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product"
    }
  ],
  quantity: {
    type: Number,
    default: 1
  }
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
