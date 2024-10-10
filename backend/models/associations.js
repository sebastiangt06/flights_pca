const Flight = require('./flightModel');
const Reservation = require('./reservationModel');

// Definir las asociaciones aquí
Flight.hasMany(Reservation, { foreignKey: 'flightId', as: 'reservations' });
Reservation.belongsTo(Flight, { foreignKey: 'flightId', as: 'flight' });

// Exportar los modelos nuevamente si es necesario
module.exports = {
    Flight,
    Reservation
};