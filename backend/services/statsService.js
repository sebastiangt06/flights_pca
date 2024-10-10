const { Op } = require('sequelize');
const Flight = require('../models/flightModel');
const Reservation = require('../models/reservationModel');
const sequelize = require('../config/db');

class StatsService {
    static async getAirlineStats() {
        try {
            const stats = await Reservation.findAll({
                include: {
                    model: Flight,
                    as: 'flight',
                    attributes: ['airline'] // Asegúrate de incluir la aerolínea aquí
                },
                attributes: [
                    [sequelize.fn('COUNT', sequelize.col('Reservation.id')), 'reservations'],
                    'flight.airline' // Agrega esto para incluir la aerolínea en el resultado
                ],
                group: ['flight.airline'], // Agrupar solo por la aerolínea
                order: [[sequelize.literal('reservations'), 'DESC']], // Ordenar por cantidad de reservas
                raw: true // Esta opción permite trabajar con un resultado más limpio
            });
    
            // Procesar el resultado para obtener la aerolínea y las reservas
            const result = stats.map(stat => ({
                airline: stat['flight.airline'], // Ahora debería tener el valor correcto
                reservations: stat.reservations
            }));
    
            return result;
    
        } catch (error) {
            console.error("Error al obtener estadísticas:", error.message);
            throw new Error("Error al obtener estadísticas");
        }
    }

    static async getAirlineCount() {
        const airlines = await Flight.findAll({
            attributes: ['airline'],
            group: ['airline'],
        });
        return { count: airlines.length };
    }
}

module.exports = StatsService;