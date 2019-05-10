const express = require("express")
const router = express.Router()
const conn = require("./db")

router.post("/recipes", (req, res, next) => {
  const recipes = req.body.recipes

  const sql = 
  `INSERT INTO users (id, name, ingredients, prep, directions) VALUES (?, ?, ?, ?, ?)`

  conn.query(sql, [id, name, ingredients, prep, directions], (err, results, fields) => {
    console.log(results)
    const rec = results.rec
  })

})

module.exports = router