import NavBar from "./components/NavBar.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    // const response = await fetch('http://localhost:3001/api/test-users', {
    return (
        <>
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
        </>
    )
}

export default App
