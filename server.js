const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');

// Load env variasbles
dotenv.config({ path: './config/config.env' });

// Connect the database
connectDB();

// Route file
const note = require('./routes/note');

const app = express();

// Dev logging middleware
app.use(morgan('dev'));

// Parser body
app.use(express.json());

//Mount router
app.use('/api/v1/notes', note);


const PORT = process.env.PORT || 5050;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);

    // Close server & exit process
    server.close(() => process.exit(1));


});
