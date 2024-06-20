const express = require("express");
const router = express.Router();

// Importando controles:
const {indexPage} = require("../controllers/indexController");

router.get("/", (req, res) => {
    indexPage(req, res);
})

module.exports = router;