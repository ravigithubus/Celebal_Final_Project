const apiClient = require('../utils/apiClient');

exports.createBooking = async (bookingDetails) => {
  // Call to external booking API
  const response = await apiClient.post('/bookings', bookingDetails);
  return response.data;
};
