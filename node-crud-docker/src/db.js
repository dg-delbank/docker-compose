const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@db:5432/mydb', {
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
