const express = require('express');
require('dotenv').config();

const sequelize = require('./config/connection');

const routes = require('./routes');
// import sequelize connections

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});