import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function handleThemeChange() {
    setDarkMode(!darkMode)
  }
  const paletteType = darkMode?'dark':'light'
const theme = createTheme({
  palette:{
    mode:paletteType,
    background:{
      default: paletteType === 'light' ? '#eaeaea' : '#121212'
    }
  }
  
})
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline/>
      <Header darkMode = {darkMode} handleThemeChange = {handleThemeChange}/>
      <Container>
        <Outlet/>
      </Container>
      
      
    </ThemeProvider>
  );
}

export default App;
