const express = require('express');
const router = express.Router();
const ARMParser = require('../lib/arm-parser');
const utils = require('../lib/utils');

router
.post('/edit', function (req, res, next) {
  // JSON from post data
  let templateJSON = req.body.editor;

  // Parse the template JSON
  var parser = new ARMParser(templateJSON);    

  if(parser.getError()) {
    res.render('error', {
      err: parser.getError(),
      showTools: false
    });
    return; 
  }

  // Pass result of parsing to the view
  res.render('viewer', {
    dataJSON: JSON.stringify(parser.getResult()),
    showTools: true,
    template: utils.encode(templateJSON)
  });
})

module.exports = router;