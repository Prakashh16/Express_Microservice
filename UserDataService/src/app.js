const express = require('express');
const path = require('path');
const { sequelize, Data } = require(path.join(__dirname, '..', 'models'));
const app = express();
const port = process.env.PORT || 3005;
const serviceName = process.env.SERVICE_NAME || 'UserDataService';

app.use(express.json());

// POST endpoint to handle /data
app.post('/data', async (req, res) => {
  const { userId, data } = req.body; 

  try {
    const newData = await Data.create({ userId, data });
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/data', async (req, res) => {
  try {
    const data = await Data.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', async () => {
    console.log(`${serviceName} listening at http://0.0.0.0:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log('Sequelize is using the following config:', path.join(__dirname, '..', 'config', 'config.json'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
