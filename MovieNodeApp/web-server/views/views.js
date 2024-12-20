const apiKey = '49ba2e8a573ffd93a08dc931c0ec0997'; // My API Key


document.getElementById('search-button').addEventListener('click', async () => {
    const movieTitle = document.getElementById('movie-input').value;
    const movieData = await searchMovie(movieTitle);
    
    if (movieData) {
        const similarMovies = await getSimilarMovies(movieData.id);
        displayResults(similarMovies);
    }
});

// async means it waits then it responds, which then it continues after "await"


async function searchMovie(title) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`);
    const data = await response.json();
    return data.results[0]; // Return the first movie found
}

async function getSimilarMovies(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`);
    const data = await response.json();
    return data.results; // Return the list of similar movies
}

function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerText = movie.title;
        movieDiv.onclick = () => alert(`Selected Movie: ${movie.title}`);
        resultsDiv.appendChild(movieDiv);
    });
}