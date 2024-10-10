import {React, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightForm from "./components/FlightForm";
import SearchFlights from "./components/SearchFlights";
import Statistics from "./components/Statistics";
import { Container } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Button } from '@mui/material';
import ButtonDarkMode from "./components/ButtonToggle";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <NavigationBar>
            
          </NavigationBar>
         
          <ButtonDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            
          <Routes>
            <Route path="/" element={<FlightForm />} />
            <Route path="/search" element={<SearchFlights />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
