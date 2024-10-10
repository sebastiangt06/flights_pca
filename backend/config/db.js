const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('flights_db', 'root', '123456789',{
    host: 'database-1.cf4sgsaaaf3v.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        connectTimeout: 60000, // Establece un tiempo de espera si es necesario
    }
});

sequelize.authenticate()
    .then(() =>{console.log('connected to database')})
    .catch(err => console.log('Unable to connect to database', err));


module.exports = sequelize;