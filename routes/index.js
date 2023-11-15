const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = '9831f50ad5cd04d6abb719d0dcb9603b';
const MOVIE_API_URL = 'https://api.themoviedb.org/3/movie/popular';

router.get("/movies", async (req, res) => {
    try {
        const response = await fetch(`${MOVIE_API_URL}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.json({ movies: data });

    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
