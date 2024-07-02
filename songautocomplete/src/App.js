import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import SongAutocomplete from './components/Songcomplete';

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                    Copy Rights: 2024 Song Search App. All rights reserved.
                </Typography>
            </Box>
        </div>
    );
}

export default App;
