const gb = {
    options: {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    },
    type: 'Book',
    key: process.env.GB_API_KEY,

    bookUrl(query) {
        console.log(this.key)
        return `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(query)}&maxResults=10&key=${this.key}`
    },

    async find(query) {
        const res1 = await fetch(this.bookUrl(query), this.options)
        const books = await res1.json()
        const items = []
        for (const book of books?.items) {
            const item = await this.toObj(book)
            items.push(item)
        }
        return await items
    },

    toObj(book) {
        return {
            externalId: book.id,
            title: book.volumeInfo.title,
            releaseDate: book.volumeInfo.publishedDate,
            note: book.volumeInfo.description,
            authors: () => {
                if (book.volumeInfo.authors !== undefined) {
                    return book.volumeInfo.authors.join(', ')
                } else { return book.volumeInfo.publisher }
            },
            type: 'Book',
            img: book?.volumeInfo?.imageLinks?.thumbnail
        }
    }
}

module.exports = gb
