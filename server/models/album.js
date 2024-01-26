const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    note: { type: String, required: false },
    albumUrl: { type: String, require: true },
    authors: { type: String, required: false },
    date: { type: String, required: false },
    externalId: { type: String, required: false },
    genre: { type: String, required: false },
    img: { type: String, required: false },
    title: { type: String, required: true },
    type: { type: String, required: true },
})

const Album = mongoose.model("Album", albumSchema)

module.exports = Album
