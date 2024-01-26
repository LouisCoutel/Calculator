const express = require("express")
const router = express.Router()
const externalCtrl = require("../controllers/external")

router.get("/find/:type/:query", externalCtrl.find)
module.exports = router
