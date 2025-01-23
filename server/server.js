const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Contact Request:', name, email, phone, message);
  res.send({ success: true, message: 'Contact request submitted.' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// For Bookings
app.post('/api/bookings', (req, res) => {
    const { name, email, date } = req.body;
    console.log('New Booking:', name, email, date);
    res.send({ success: true, message: 'Booking request submitted.' });
  });
  