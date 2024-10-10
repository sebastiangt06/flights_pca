const Flight = require('../models/flightModel');
const { Op } = require('sequelize');

class FlightService {

    // Obtener todos los vuelos
    static async getAllFlights(query) {
    const { origin, destination, departureDate } = query;
    const conditions = {};

    if (origin) {
      conditions.origin = origin;
    }

    if (destination) {
      conditions.destination = destination;
    }

    if (departureDate) {
      const parsedDate = new Date(departureDate);
      if (!isNaN(parsedDate.getTime())) {
           // Establece el rango de búsqueda desde el inicio del día hasta el final del día
          const startOfDay = new Date(parsedDate);
          startOfDay.setHours(0, 0, 0, 0); // Establecer hora a 00:00:00

          const endOfDay = new Date(parsedDate);
          endOfDay.setHours(23, 59, 59, 999); // Establecer hora a 23:59:59

          conditions.departureDate = {
              [Op.between]: [startOfDay, endOfDay], // Comparar en un rango
          };
      }
    }

    try {
      const flights = await Flight.findAll({ where: conditions });
      return flights;
    } catch (error) {
      throw new Error("Error al consultar vuelos.");
    }
  }
    
  static   async createFlight(flightData) {
    const { origin, destination, departureDate, arrivalDate, airline, price } = flightData;

    if (!origin || !destination || !departureDate || !arrivalDate || !airline || !price) {
      throw new Error('Faltan parámetros requeridos en el cuerpo de la solicitud.');
    }

    try {
      const flight = await Flight.create(flightData);
      return flight;
    } catch (error) {
      throw new Error('Error al crear el vuelo.');
    }
  }

}

module.exports = FlightService;