const dzr = require('../providers/dzr.js')
const gb = require('../providers/gb.js')
const tmdb = require('../providers/tmdb.js')
const { JsonStreamStringify } = require('json-stream-stringify')
const fetch = require('node-fetch')

function matchProvider(type) {
    if (type == 'Album') {
        return dzr
    } else if (type == 'Book') {
        return gb
    } else if (type == 'Movie') {
        return tmdb
    }
}

exports.find = async (req, res, next) => {
    if (req.params.type != 'All') {
        const provider = matchProvider(req.params.type)
        const items = await provider?.find(req.params.query)
        const obj = {}
        obj[req.params.type.toLowerCase() + "s"] = await items
        res.status(200).send(JSON.stringify( await obj ))
    } else {
        const albums = await dzr.find(req.params.query)
        const books = await gb.find(req.params.query)
        const movies = await tmdb.find(req.params.query)
        new JsonStreamStringify({ albums, books, movies }).pipe(res)
    }
}
