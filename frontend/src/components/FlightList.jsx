import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import flightService from '../services/flightService';

const FlightList = ({ flights, onReserve }) => {

    const [open, setOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [passengerName, setPassengerName] = useState('');
    const [passengerEmail, setPassengerEmail] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [emailError, setEmailError] = useState(false); // State for email error

    const handleClickOpen = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedFlight(null);
        setPassengerName('');
        setPassengerEmail('');
        setReservationDate('');
    };

    const handleReserve = async () => {
        // Validar que todos los campos estén llenos
        if (!passengerName || !passengerEmail || !reservationDate) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar formato de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(passengerEmail)) {
            setEmailError(true); // Setear el error de email
            return;
        } else {
            setEmailError(false); // Resetear si el email es válido
        }

        if (selectedFlight) {
            try {
                await flightService.reserveFlight(selectedFlight.id, passengerName, passengerEmail, reservationDate);
                alert('Reserva creada con éxito');
                handleClose();
            } catch (error) {
                console.error('Error al hacer la reserva:', error);
                alert('Error al hacer la reserva');
            }
        }
    };

    if (flights.length === 0) {
        return <Typography variant="h6">No se encontraron vuelos.</Typography>;
    }

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC' 
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options); 
    };

    return (
        <>
        <List>
            {flights.map((flight) => (
                <ListItem key={flight.id} divider>
                    <ListItemText
                        primary={`${flight.origin} -> ${flight.destination}`}
                        secondary={`Aerolínea: ${flight.airline} | Precio: $${flight.price} | Fecha Llegada ${formatDate(flight.arrivalDate)} | Fecha Salida ${formatDate(flight.departureDate)}`}
                    />
                    <Button style={{marginLeft:'30px'}} variant="contained" color="secondary" onClick={() => handleClickOpen(flight)}>Reservar</Button>
                </ListItem>
            ))}
        </List>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reservar Vuelo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Completa los detalles para reservar el vuelo.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nombre del pasajero"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Email del pasajero"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={passengerEmail}
                    error={emailError} // Indicar error si el email es inválido
                    onChange={(e) => {
                        setPassengerEmail(e.target.value);
                        setEmailError(false); // Resetear error al cambiar el email
                    }}
                    helperText={emailError ? 'Introduce un email válido' : ''}
                />
                <TextField
                    margin="dense"
                    label="Fecha de reserva"
                    type="datetime-local"
                    fullWidth
                    variant="outlined"
                    value={reservationDate}
                    InputLabelProps={{ shrink: true }} 
                    onChange={(e) => setReservationDate(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancelar</Button>
                <Button onClick={handleReserve} color="primary">Reservar</Button>
            </DialogActions>
        </Dialog>
    </>
    );
};

export default FlightList;
