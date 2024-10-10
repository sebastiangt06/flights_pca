const flightService = require("../services/flightService");



class FlightController {

    static async getAllFlights (req, res)  {
        try {
          const flights = await flightService.getAllFlights(req.query);
          res.json(flights);
        } catch (error) {
          console.error("Error fetching flights:", error);
          res.status(500).json({ error: error.message });
        }
      };
      
     static async createFlight (req, res) {
        try {
          const flight = await flightService.createFlight(req.body);
          res.status(201).json(flight);
        } catch (error) {
          console.error(error);
          res.status(400).json({ error: error.message });
        }
    };


}

module.exports = FlightController;
