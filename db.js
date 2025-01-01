const mongoose = require('mongoose');

// Load environment variables (if using .env file)
require('dotenv').config();

// Database URI from your MongoDB Atlas or local setup
const DB_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/my_database_name';

// MongoDB connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, options);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

connectDB();