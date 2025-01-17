import axios from "axios";

const API_URL_FLIGHTS = "https://flights-pca.onrender.com/api/flights";
const API_URL = "https://flights-pca.onrender.com/api";

const flightService = {
  createFlight: (flightData) => axios.post(API_URL_FLIGHTS, flightData),
  searchFlights: (params) => axios.get(API_URL_FLIGHTS, { params }),
  getStatistics: () => axios.get(`${API_URL}/stats`),

  reserveFlight: async (
    flightId,
    passengerName,
    passengerEmail,
    reservationDate
  ) => {
    const response = await axios.post(`${API_URL}/reservations`, {
      flightId,
      passengerName,
      passengerEmail,
      reservationDate,
    });
    console.log(response.data, "RESPONSE DATA");
    return response.data;
  },
};

export default flightService;
