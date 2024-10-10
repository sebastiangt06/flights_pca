import axios from 'axios';

const API_URL = 'https://flights-pca.onrender.com/api/reservations';

const reservationService = {
    createReservation: (reservationData) => axios.post(API_URL, reservationData)
};

export default reservationService;
