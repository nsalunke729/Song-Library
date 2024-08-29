/*import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function SongAutocomplete() {
    const [songs, setSongs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios.get('/songs.json').then((response) => {
            setSongs(response.data);
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
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
        />
    );
}

export default SongAutocomplete;*/
