const bookingService = require('../services/bookingService');

exports.createBooking = async (req, res) => {
  try {
    const bookingDetails = req.body;
    const bookingConfirmation = await bookingService.createBooking(bookingDetails);
    res.json(bookingConfirmation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
