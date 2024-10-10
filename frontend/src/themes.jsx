// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Cambia a 'dark' para el modo oscuro
        primary: {
            main: '#1976d2', // Color principal
        },
        secondary: {
            main: '#dc004e', // Color secundario
        },
    },
});

export default theme;