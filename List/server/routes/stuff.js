const express = require("express")
// const { model } = require ('mongoose')
const router = express.Router()
const stuffCtrl = require("../controllers/stuff")

router.post("/films", stuffCtrl.createFilm)
router.post("/albums", stuffCtrl.createAlbum)
router.post("/books", stuffCtrl.createBook)
router.delete("/films/:id", stuffCtrl.deleteOneFilm)
router.delete("books/:id", stuffCtrl.deleteOneBook)
router.delete("albums/:id", stuffCtrl.deleteOneBook)
router.get("/all", stuffCtrl.getAllThings)

module.exports = router
