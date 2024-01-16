const tmdbToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ViMWFhM2EzNDZkNTg5MWFkZDFjMWQ4MzM2ZGQ2NyIsInN1YiI6IjY0YzkwNDhiODlmNzQ5MDBhZTBiZmI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WY3acLejoDB0otuZHhtAFelDy8ONHz9zJs_3pr1DHSk'

const tmdb = {
    options: {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdbToken}`
        }
    },
    type: 'Movie',

    movieUrl(query) {
        return `https://api.themoviedb.org/3/search/movie?query=${encodeURI(query)}`
    },

    detailsUrl(movieId) {
        return `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits`
    },

    async find(query) {
        const res1 = await fetch(this.movieUrl(query), this.options)
        const movies = await res1.json()
        const items = []
        for (const movie of movies?.results) {
            const res2 = await fetch(this.detailsUrl(movie.id), this.options)
            const details = await res2.json()
            const item = await this.toObj(movie, await details)
            items.push(item)
        }
        return await items
    },

    toObj(movie, details) {
        return {
            externalId: movie.id,
            title: movie.original_title,
            releaseDate: movie.release_date,
            note: movie.overview,
            type: 'Movie',
            authors: details?.credits?.crew[0]?.original_name,
            genre: details?.genres[0]?.name,
            img: `https://image.tmdb.org/t/p/w92/${details?.poster_path}`
        }
    }
}

module.exports = tmdb
