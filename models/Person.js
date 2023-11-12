
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

// Create a person model
const Person = mongoose.model('Person', personSchema);


// export model
module.exports = Person;