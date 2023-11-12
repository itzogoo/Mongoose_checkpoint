const express = require('express');
const Person = require('./models/Person');

const Router = express.Router();


// Create and Save a Record of a Model
Router.get('/create-person', (req, res) => {
  const newPerson = new Person({
    name: 'John',
    age: 25,
    favoriteFoods: ['Pizza', 'Pasta']
  });

  newPerson.save((err, data) => {
    if (err) return res.status(500).send('Error saving record');
    res.status(200).json(data);
  });
});

// Create Many Records with model.create()
router.get('/create-people', (req, res) => {
  const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Burger'] },
    { name: 'Bob', age: 28, favoriteFoods: ['Taco', 'Salad'] }
  ];

  Person.create(arrayOfPeople, (err, data) => {
    if (err) return res.status(500).send('Error saving records');
    res.status(200).json(data);
  });
});

// Use model.find() to Search Your Database
router.get('/find-people', (req, res) => {
    Person.find({ name: 'John' }, (err, data) => {
      if (err) return res.status(500).send('Error finding people');
      res.status(200).json(data);
    });
  });
  
  // Use model.findOne() to Return a Single Matching Document from Your Database
  router.get('/find-person', (req, res) => {
    Person.findOne({ favoriteFoods: 'Burger' }, (err, data) => {
      if (err) return res.status(500).send('Error finding person');
      res.status(200).json(data);
    });
});


// export router
module.exports = Router;