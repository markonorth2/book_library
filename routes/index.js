const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // res.send('Hello World! This is Mark. Canada #1. Taiwan #1. China #1.')
  res.render('index')
})

module.exports = router  