import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SongDetailsComponent = ({ selectedSong }) => {

    return (
        <Box sx={{ marginTop: 2, padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="h6">Song Details</Typography>
            <Typography><strong>Title:</strong> {selectedSong.title}</Typography>
            <Typography><strong>Artist:</strong> {selectedSong.artist}</Typography>
            <Typography><strong>Album:</strong> {selectedSong.album}</Typography>
            <Typography><strong>Length:</strong> {selectedSong.length}</Typography>
            {/* Link to search for song on YouTube */}
            <Box sx={{ marginTop: 2 }}>
                <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedSong.title + ' ' + selectedSong.artist)}`} target="_blank" rel="noopener noreferrer">
                    <IconButton color="primary">
                        <SearchIcon />
                    </IconButton>
                    Search on YouTube
                </a>
            </Box>
            {/* Display album description */}
            <Typography sx={{ marginTop: 2 }}><strong>Description:</strong> {selectedSong.description}</Typography>
        </Box>
    );
};

export default SongDetailsComponent;
