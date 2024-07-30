const express = require('express');
const bodyParser = require('body-parser');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

