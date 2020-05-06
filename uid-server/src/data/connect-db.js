/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });
    console.info('Database connected successfully');
  } catch (err) {
    console.error('DATABASE CONNECTION ERROR: ', err);
  }
};

export default connectDB;
