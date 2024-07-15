require('dotenv').config();
const express = require('express');
const path = require('path');
const { sequelize } = require(path.join(__dirname, '..', 'models'));
const { Key } = require('../models'); 
const app = express();
const port = process.env.PORT || 3003;
const serviceName = process.env.SERVICE_NAME || 'EncryptionService';

app.use(express.json());


app.post('/keys', async (req, res) => {
  const { userId, publicKey, privateKey } = req.body;
  try {
    const key = await Key.create({ userId, publicKey, privateKey });
    res.status(201).json(key);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/keys', async (req, res) => {
  try {
    const keys = await Key.findAll();
    res.status(200).json(keys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', async () => {
    console.log(`${serviceName} listening at http://0.0.0.0:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
