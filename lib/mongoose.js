const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

let cached = global.__mongoose;
if (!cached) cached = global.__mongoose = { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI)
      .then((m) => {
        console.log('MongoDB connected.');
        return m.connection;
      })
      .catch((err) => {
        console.error('Mongo connect error:', err);
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectToDatabase;
