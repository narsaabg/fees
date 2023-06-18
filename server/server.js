const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// narsaabg
// Zuod8n5VzsMyLiIA

//buemkyya
//e7800ed6-70bf-461d-8e43-b9aadbdcb5c5  


const port = process.env.PORT || 8000;
console.log(port);

// api routes
const apiRoutes = require('./routes/apiRoutes');

// cors options
const corsOptions = {
    origin: 'http://localhost:8001',
};

// Register your API routes
app.use('/api',cors(corsOptions), apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
