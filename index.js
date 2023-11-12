// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personRoutes = require('./routes/personRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

/* Use the person routes */
app.use('/people', personRoutes);

const PORT = process.env.PORT || 3037;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

