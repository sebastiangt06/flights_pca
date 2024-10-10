const Reservation = require("../models/reservationModel");

class ReservationService {

  static async createReservation(reservationData) {
    try {
      const reservation = await Reservation.create(reservationData);
      return reservation;
    } catch(error) {
        throw new Error('Error al crear la reserva: ' + error.message);
    }
  }
}

module.exports = ReservationService;
