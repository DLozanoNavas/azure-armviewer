const express = require('express');
const router = express.Router();

// Index and root
router
.get('/', function (req, res, next) {
  res.render('index', 
  { 
    isHome: true
  });
})

module.exports = router;
