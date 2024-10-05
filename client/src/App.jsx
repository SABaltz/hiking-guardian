import NavBar from "./components/nav-bar/NavBar.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";

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
