const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = mongoose.Schema(
  {
    productCode: {
      type: Number,
      required: true
    },
    sku: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    costPrice: {
      type: Number,
      required: true,
      min: 0
    },
    sellingPrice: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    color: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    size: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    inventory: {
      type: Number,
      default: 0
    },
    images: {
      type: [String],
      validate(value) {
        if (value.length > 10) {
          throw new Error("Image exceeds the limit of 10");
        }
      }
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

productSchema.pre("save", function(next) {
  const product = this;
  const slug = (
    product.name +
    " " +
    product.color +
    " " +
    product.size
  ).toLowerCase();

  product.slug = slugify(slug);

  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
