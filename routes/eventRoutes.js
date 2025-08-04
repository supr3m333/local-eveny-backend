const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new event
router.post('/', async (req, res) => {
  const { name, location, category, date, description } = req.body;
  const newEvent = new Event({ name, location, category, date, description });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
