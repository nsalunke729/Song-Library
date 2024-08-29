import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import FilterComponent from './FilterComponent';
import AutocompleteComponent from './AutocompleteComponent';
import SongDetailsComponent from './SongDetailsComponent';

// Function to flatten the JSON data into a format suitable for Autocomplete
const flattenData = (data) => {
    const songs = [];
    const artists = new Set();
    const albums = new Set();

    // Iterate through each artist in the JSON data
    data.forEach(artist => {
        artist.albums.forEach(album => {
            albums.add(album.title); // Add album title to a Set to ensure uniqueness
            album.songs.forEach(song => {
                songs.push({
                    title: song.title,
                    artist: artist.name,
                    album: album.title,
                    length: song.length,
                    description: album.description // Include album description in song data
                });
            });
        });
        artists.add(artist.name); // Add artist name to a Set to ensure uniqueness
    });

    return { songs, artists: Array.from(artists), albums: Array.from(albums) };
};

function Songcomplete() {
    const [songs, setSongs] = useState([]); // State to hold all songs
    const [artists, setArtists] = useState([]); // State to hold all artists for filtering
    const [albums, setAlbums] = useState([]); // State to hold all albums for filtering
    const [filteredSongs, setFilteredSongs] = useState([]); // State to hold songs after applying filters
    const [inputValue, setInputValue] = useState(''); // State to hold the input value for search
    const [selectedSong, setSelectedSong] = useState(null); // State to hold the selected song for display
    const [selectedArtist, setSelectedArtist] = useState(''); // State to hold the selected artist for filtering
    const [selectedAlbum, setSelectedAlbum] = useState(''); // State to hold the selected album for filtering

    // Fetch data from JSON file on component mount
    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                const { songs, artists, albums } = flattenData(response.data);
                setSongs(songs); // Set all songs
                setArtists(artists); // Set all artists
                setAlbums(albums); // Set all albums
                setFilteredSongs(songs); // Initially set filtered songs to all songs
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Function to handle filtering based on selected artist and album
    useEffect(() => {
        let newFilteredSongs = songs;

        if (selectedArtist) {
            newFilteredSongs = newFilteredSongs.filter(song => song.artist === selectedArtist);
        }

        if (selectedAlbum) {
            newFilteredSongs = newFilteredSongs.filter(song => song.album === selectedAlbum);
        }

        setFilteredSongs(newFilteredSongs);
    }, [selectedArtist, selectedAlbum, songs]);


    return (
        <Box sx={{ width: '80%', margin: '0 auto', paddingTop: 4 }}>
            {/* FilterComponent for artist and album filtering */}
            <FilterComponent
                artists={artists}
                albums={albums}
                selectedArtist={selectedArtist}
                setSelectedArtist={setSelectedArtist}
                selectedAlbum={selectedAlbum}
                setSelectedAlbum={setSelectedAlbum}
            />
            {/* AutocompleteComponent for song search */}
            <AutocompleteComponent
                filteredSongs={filteredSongs}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setSelectedSong={setSelectedSong}
            />
            {/* SongDetailsComponent for displaying selected song details */}
            {selectedSong && (
                <SongDetailsComponent selectedSong={selectedSong} />
            )}
        </Box>
    );
}

export default Songcomplete;
