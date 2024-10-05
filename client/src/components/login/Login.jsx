import Typography from "@mui/material/Typography";
import {useState} from "react";
import Grid from '@mui/material/Grid2';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

function Login() {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });
            console.log(username, password)

            const data = await response.json();

            if (response.ok) {
                console.log(response)
                setToken(data.token);
                // localStorage.setItem('token', data.token); // Save JWT token to localStorage
            } else {
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleProtected = async (e) => {
        e.preventDefault();
        // const storedToken = localStorage.getItem('token'); // Retrieve token from localStorage

        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/protected', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Protected data:', data);
            } else {
                console.error('Access to protected route failed');
            }
        } catch (error) {
            console.error('Error accessing protected route:', error);
        }
    };

    return (

        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            <Grid size={6}>
                <Typography variant="h4" align="center">
                    Login
                </Typography>
            </Grid>
            <Grid size={6}>
                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                />
            </Grid>
            <Grid size={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}>
                    Login
                </Button>
            </Grid>
            <Grid size={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleProtected}>
                    Protected
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login