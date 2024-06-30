import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

// Function to flatten the JSON data
const flattenData = (data) => {
    const songs = [];
    data.forEach(artist => {
        artist.albums.forEach(album => {
            album.songs.forEach(song => {
                songs.push({
                    title: song.title,
                    artist: artist.name,
                    album: album.title,
                    length: song.length
                });
            });
        });
    });
    return songs;
};

function Songcomplete() {
    const [songs, setSongs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                console.log('Fetched data:', response.data);
                const flattenedSongs = flattenData(response.data);
                setSongs(flattenedSongs);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Autocomplete
            options={songs}
            getOptionLabel={(option) => `${option.title} - ${option.artist}`}
            style={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label="Search Songs" variant="outlined" />
            )}
            value={inputValue}
            onChange={(event, newValue) => {
                setInputValue(newValue);
            }}
        />
    );
}

export default Songcomplete;
