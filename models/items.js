const mongoose = require('mongoose');
const validatorJS = require('validator');
const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'An item must have a name'],
      minLength: [3, 'An item name must be at least 3 character long'],
      maxLength: [125, 'An item name must be less than 126 characters'],
      validate: [
        validatorJS.isAlpha,
        `Item name ({VALUE}) must be alphabetical only`,
      ],
    },
    category: {
      type: String,
      required: [true, 'An item must belongs to a category'],
      trim: true,
      enum: {
        values: ['Drinks', 'Sweets', 'Bakery'],
        message: 'Categories are:- Drinks, Sweets, Bakery',
      },
    },
    price: {
      type: Number,
      min: [1, 'An item must be above 1.0'],
    },
    details: {
      type: String,
      default: 'No details for this item',
    },
    thumbnail: String,
  },
  {}
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
