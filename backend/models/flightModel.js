const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Reservation = require('../models/reservationModel');

const Flight = sequelize.define('Flight', {
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrivalDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    airline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'flights', // Nombre de la tabla en la base de datos
    timestamps: false // No generar campos createdAt y updatedAt
});


module.exports = Flight;