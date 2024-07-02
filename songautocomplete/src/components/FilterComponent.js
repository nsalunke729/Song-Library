import React from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';

const FilterComponent = ({ artists, albums, selectedArtist, setSelectedArtist, selectedAlbum, setSelectedAlbum }) => {

    return (
        <Grid container spacing={2} justifyContent="center">
            {/* Artist filter dropdown */}
            <Grid item xs={12} sm={4}>
                <TextField
                    select
                    label="Filter by Artist"
                    value={selectedArtist}
                    onChange={(e) => setSelectedArtist(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="">All Artists</MenuItem>
                    {artists.map((artist) => (
                        <MenuItem key={artist} value={artist}>
                            {artist}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            {/* Album filter dropdown */}
            <Grid item xs={12} sm={4}>
                <TextField
                    select
                    label="Filter by Album"
                    value={selectedAlbum}
                    onChange={(e) => setSelectedAlbum(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="">All Albums</MenuItem>
                    {albums.map((album) => (
                        <MenuItem key={album} value={album}>
                            {album}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    );
};

export default FilterComponent;
