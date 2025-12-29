const Item = require('../models/itemModel');
exports.getAllItems = async (req, res, next) => {
  try {
    const items = await Item.find({}, {});
    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.createItem = async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newItem,
    });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};
