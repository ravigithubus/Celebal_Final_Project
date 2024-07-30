const apiClient = require('../utils/apiClient');

exports.searchFlights = async (origin, destination, departureDate, returnDate, passengers) => {
  const params = {
    origin,
    destination,
    departureDate,
    returnDate,
    passengers,
  };

  // Call to external flight API
  const response = await apiClient.get('/flights', { params });
  return response.data;
};
