const flightService = require('../services/flightService');

exports.searchFlights = async (req, res) => {
  try {
    const { origin, destination, departureDate, returnDate, passengers } = req.query;
    const flights = await flightService.searchFlights(origin, destination, departureDate, returnDate, passengers);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
