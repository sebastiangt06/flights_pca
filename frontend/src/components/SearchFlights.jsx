import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box  } from '@mui/material';
import flightService from '../services/flightService';
import FlightList from './FlightList';

const SearchFlights = () => {
    const [searchParams, setSearchParams] = useState({
        origin: '',
        destination: '',
        departureDate: ''
    });
    const [flights, setFlights] = useState([]);

    const handleChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value
        });
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchParams,'SEARCHPARAMS')
        const result = await flightService.searchFlights(searchParams);
        console.log(result, 'RESULT')
        setFlights(result.data);
    };

  

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Buscar Vuelos</Typography>
            <form onSubmit={handleSearch}>
                <TextField name="origin" label="Origen" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="destination" label="Destino" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="departureDate" label="Fecha de salida" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Buscar Vuelos</Button>
            </form>

             {/* Contenedor para la lista de vuelos con scroll */}
             <Box
                sx={{
                    maxHeight: '400px', // Limitar la altura del contenedor
                    overflowY: 'auto',   // Agregar scroll vertical
                    marginTop: 2,
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: 2,
                }}
            >
                <FlightList flights={flights} />
            </Box>
        </Container>
    );
};

export default SearchFlights;
