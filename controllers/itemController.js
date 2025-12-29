exports.getAllItems = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: 'All data is found',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
