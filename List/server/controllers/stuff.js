const Film = require('../models/film.js')
const Book = require('../models/book.js')
const Album = require('../models/album.js')
const generateTimeline = require('../generateTimeline')

exports.createFilm = (req, res, next) => {
    delete req.body._id
    const film = new Film({
        ...req.body
    })
    film
        .save()
        .then(() => {
            res.status(201).json({ film })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.createBook = (req, res, next) => {
    delete req.body._id
    const book = new Book({
        ...req.body
    })
    book
        .save()
        .then(() => {
            res.status(201).json({ book })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.createAlbum = (req, res, next) => {
    delete req.body._id
    const album = new Album({
        ...req.body
    })
    album
        .save()
        .then(() => {
            res.status(201).json({ album })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteOneFilm = (req, res, next) => {
    Film.deleteOne({ _id: req.params.id })
        .then((film) => {
            console.log(req.params.id, ' supprimé')
            res.status(200).json({ film, message: 'Deleted' })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteOneAlbum = (req, res, next) => {
    Film.deleteOne({ _id: req.params.id })
        .then((album) => {
            console.log(req.params.id, ' supprimé')
            res.status(200).json({ album, message: 'Deleted' })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteOneBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then((book) => {
            console.log(req.params.id, ' supprimé')
            res.status(200).json({ book, message: 'Deleted' })
        })
        .catch((error) => res.status(400).json({ error }))
}

exports.getAllThings = (req, res, next) => {
    const promises = []
    promises.push(Film.find())
    promises.push(Book.find())
    promises.push(Album.find())
    Promise.all(promises)
        .then((all) => {
            const results = all[0].concat(all[1]).concat(all[2])
            console.log(results)
            generateTimeline(results)
            res.status(200).json({ results })
        })
        .catch((error) => res.status(400).json({ error }))
}
