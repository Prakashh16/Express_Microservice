require('dotenv').config();
const express = require('express');
const path = require('path');
const { sequelize, User } = require(path.join(__dirname, '..', 'models'));
const app = express();
const port = process.env.PORT || 3001;
const serviceName = process.env.SERVICE_NAME || 'AuthenticationService'; 

app.use(express.json());

app.post('/users', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, async () => {
  console.log(`${serviceName} listening at http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log('Sequelize is using the following config:', path.join(__dirname, '..', 'config', 'config.json'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
