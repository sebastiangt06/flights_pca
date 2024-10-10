import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import flightService from '../services/flightService';

const FlightForm = () => {
    const [flightData, setFlightData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        arrivalDate: '',
        airline: '',
        price: ''
    });

    const handleChange = (e) => {
        setFlightData({
            ...flightData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await flightService.createFlight(flightData);
            alert('Vuelo registrado correctamente');
        } catch (error) {
            alert('Error al registrar vuelo');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Registrar Vuelo</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="origin" label="Origen" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="destination" label="Destino" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="departureDate" label="Fecha de salida" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" onChange={handleChange} />
                <TextField name="arrivalDate" label="Fecha de llegada" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" onChange={handleChange} />
                <TextField name="airline" label="Aerolínea" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="price" label="Precio" type="number" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Registrar Vuelo</Button>
            </form>
        </Container>
    );
};

export default FlightForm;
