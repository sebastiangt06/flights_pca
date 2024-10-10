const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');
const Flight = require('../models/flightModel');

const Reservation = sequelize.define('Reservation', {
    flightId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'flights', // Nombre de la tabla de vuelos
            key: 'id'
        },
        allowNull: false
    },
    passengerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passengerEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reservationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reservations', // Nombre de la tabla en la base de datos
    timestamps: false // No generar campos createdAt y updatedAt
});



module.exports = Reservation;