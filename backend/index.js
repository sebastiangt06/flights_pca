const express = require('express');
const cors = require('cors'); 
const sequelize = require('./config/db');
const app = express();
const flightRoutes = require('./routes/flightRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const statsRoutes = require('./routes/statsRoutes');

require('./models/associations');

//CORS
app.use(cors({
    origin: 'https://flights-frontend-beta.vercel.app/'  // Permitir solicitudes front
}));

app.use(express.json());
app.use('/api', flightRoutes);
app.use('/api', reservationRoutes);
app.use('/api', statsRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({alter:true})
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error syncing database:', err));
