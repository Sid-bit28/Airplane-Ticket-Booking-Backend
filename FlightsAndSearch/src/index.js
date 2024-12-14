const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartserver = async () => {
  const app = express();

  // middleware for bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({ name: 'New Delhi' });
  });
};

setupAndStartserver();
