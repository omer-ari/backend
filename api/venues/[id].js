const connectToDatabase = require('../../lib/mongoose');
const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: String,
  address: String,
  rating: Number,
  foodanddrink: [String],
  coordinates: [Number],
  hours: [{ days: String, open: String, close: String, isClosed: Boolean }]
}, { collection: 'venues' });

const Venue = mongoose.models.Venue || mongoose.model('Venue', VenueSchema);

module.exports = async function handler(req, res) {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('DB connect error', err);
    return res.status(500).json({ error: 'Database connection error' });
  }

  const id = req.query.id;
  if (req.method === 'GET') {
    try {
      const venue = await Venue.findById(id).lean();
      if (!venue) return res.status(404).json({ error: 'Mekan bulunamadı' });
      return res.status(200).json(venue);
    } catch (err) {
      console.error('Find error', err);
      return res.status(400).json({ error: err.message });
    }
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
};
