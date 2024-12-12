import express from 'express';
import dotenv from 'dotenv';
import indexRoute from '../routes/index';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the index route
app.use('/api', indexRoute);

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});