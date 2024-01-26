const dzr = {
    options: {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    },
    type: "Album",
    searchResults: [],

    async find(query) {
        const res1 = await fetch(this.albumUrl(query), this.options)
        const albums = await res1.json()
        const items = []

        for (const album of albums?.data) {
            const res2 = await fetch(this.genreUrl(album.id), this.options)
            const genre = await res2.json()
            const item = await this.toObj(album, await genre)

            items.push(item)
        }

        return await items
    },

    albumUrl(query) {
        return `https://api.deezer.com/search/album?q=${query}&limit=15`
    },

    genreUrl(albumId) {
        return `https://api.deezer.com/genre/${albumId}`
    },

    toObj(album, genre) {
        return {
            externalId: album.id.toString(),
            title: album.title,
            albumUrl: album.link,
            img: album.cover_medium,
            authors: album.artist.name,
            type: "Album",
            genre: genre.name,
        }
    },
}

module.exports = dzr
