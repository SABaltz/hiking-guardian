import NavBar from "./components/NavBar.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx";

function App() {
    // const response = await fetch('http://localhost:3001/api/test-users', {
    return (
        <>
            <NavBar/>
            <Router>
                {/*<Link to="/">Home</Link>*/}
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Login/>}/>
                    <Route path="/home" element={<Login/>}/>
                    <Route path="/about" element={<Login/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
