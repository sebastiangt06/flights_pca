import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Sistema de Vuelos
                </Typography>
                <Button color="inherit" onClick={() => navigate('/')}>
                    Registro de Vuelos
                </Button>
                <Button color="inherit" onClick={() => navigate('/search')}>
                    Consulta de Vuelos
                </Button>
                <Button color="inherit" onClick={() => navigate('/statistics')}>
                    Estadísticas
                </Button>
            </Toolbar>
        </AppBar>
    );
};


export default NavigationBar;
