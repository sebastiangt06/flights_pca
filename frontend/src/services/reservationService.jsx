import axios from 'axios';

const API_URL = 'http://localhost:3000/api/reservations';

const reservationService = {
    createReservation: (reservationData) => axios.post(API_URL, reservationData)
};

export default reservationService;
