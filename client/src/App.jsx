import NavBar from "./components/NavBar.jsx";

function App() {

    const handleClick = async () => {
        try {
            // Replace the URL with your server API endpoint
            const response = await fetch('http://localhost:3001/api/test-users', {
                method: 'GET', // or 'POST' if you are sending data
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <NavBar/>
        </>
    )
}

export default App
