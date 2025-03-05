import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import applicantRoute from './routes/applicantRoute';
import listEndpoints from 'express-list-endpoints';

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route working!');
});


// Use the index route
app.use('/', applicantRoute);

// List all registered routes
console.log(listEndpoints(app));

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
