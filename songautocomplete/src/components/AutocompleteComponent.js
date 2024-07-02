import React from 'react';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const AutocompleteComponent = ({ filteredSongs, inputValue, setInputValue, setSelectedSong }) => {

    return (
        <Autocomplete
            options={filteredSongs}
            getOptionLabel={(option) => `${option.title} - ${option.artist}`}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Songs"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <MusicNoteIcon />
                            </InputAdornment>
                        )
                    }}
                />
            )}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onChange={(event, newValue) => {
                setSelectedSong(newValue);
            }}
            sx={{ marginTop: 2 }}
        />
    );
};

export default AutocompleteComponent;
