import NavBar from "./components/nav-bar/NavBar.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
