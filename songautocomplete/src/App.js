import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import SongAutocomplete from './components/Songcomplete';
import './App.css'; // Import custom styles

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Song Library
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 4,
                        backgroundColor: '#f9f9f9',
                        borderRadius: 2,
                        boxShadow: 3
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Find Your Favorite Songs
                    </Typography>
                    <SongAutocomplete />
                </Box>
            </Container>
            <Box
                component="footer"
                sx={{
                    padding: 2,
                    textAlign: 'center',
                    marginTop: 'auto',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.1)',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    Copyright © 2024 Song Search App. All rights reserved.
                </Typography>
                <div>
                    <span className="glyphicon glyphicon-user" style={{ color: 'black' }} ></span>
                    <a href="https://niranjan-salunke.netlify.app/" style={{ color: 'blue', marginLeft: '5px', marginRight: '5px' }}>Profile</a>
                    <a href="https://www.linkedin.com/in/niranjan-salunke/" style={{ color: 'blue', marginLeft: '5px', marginRight: '5px' }}>LinkedIn</a>
                </div>
            </Box>
        </div>
    );
}

export default App;
