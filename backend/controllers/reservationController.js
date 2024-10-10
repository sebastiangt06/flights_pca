const ReservationService = require('../services/reservationService')


class ReservationController{    

    static async createReservation (req,res) {
        try{
            const reservation = await ReservationService.createReservation(req.body)
            res.status(201).json(reservation);

        }catch(error){
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    


}

module.exports = ReservationController;
