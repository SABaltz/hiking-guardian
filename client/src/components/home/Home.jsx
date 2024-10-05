import Box from "@mui/material/Box";
import backgroundImage from "../../assets/home-wallpaper.jpg"
import './Home.css'
function Home() {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
        }}>
            <Box sx={{
                position: 'absolute',
                top: '52.5%',
                left: '50%',
                borderRadius: '100rem',
                transform: 'translate(-50%, -50%)',
                animation: 'pulse 2s infinite',
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                    <circle cx="50" cy="50" r="12" fill="red"/>
                </svg>
            </Box>
        </Box>
    )
}

export default Home