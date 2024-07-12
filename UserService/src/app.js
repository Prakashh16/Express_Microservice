'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const { sequelize } = require('../models');  
const { Profile } = require('../models');   

const app = express();
const port = process.env.PORT || 3002;  

app.use(express.json());

app.post('/profiles', async (req, res) => {
  const { userId, firstName, lastName, email } = req.body;
  try {
    const profile = await Profile.create({ userId, firstName, lastName, email });
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, async () => {
  console.log(`UserService listening at http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
