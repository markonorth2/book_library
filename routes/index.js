const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // res.send('Hello World! This is Mark. Canada #1')
  res.render('index')
})

module.exports = router  