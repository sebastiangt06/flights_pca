import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box
} from "@mui/material";
import flightService from "../services/flightService";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      const stats = await flightService.getStatistics();

      console.log("stats DEBUG", stats);
      setStatistics(stats.data);
    };
    fetchStatistics();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          maxHeight: "400px", // Limitar la altura del contenedor
          overflowY: "auto", // Agregar scroll vertical
          marginTop: 2,
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Estadísticas de Aerolíneas
        </Typography>
        <List>
          {statistics.map((stat, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${stat.airline} - Reservas: ${stat.reservations}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Statistics;
