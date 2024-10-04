import {Container, Grid2, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
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
                localStorage.setItem('token', data.token); // Save JWT token to localStorage
            } else {
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <Container maxWidth="xs">
            <Grid2 container spacing={2} justifyContent="center" style={{marginTop: "50px"}}>
                <Grid2 xs={12}>
                    <Typography variant="h4" align="center">
                        Login
                    </Typography>
                </Grid2>
                <Grid2 xs={12}>
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                        Login
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Login