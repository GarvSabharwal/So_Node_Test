var express = require('express');
var router    = express.Router();
var marco_polo = require("../server-controllers/marcoPolo.js");
var user_story = require("../server-controllers/userStory.js");

router.get('/play_marco_polo_game', function(req, res) {
	marco_polo.getGameResult(function(result) {
		res.send(result);
	})
})

router.get('/convert_invoice_numbers', function(req, res) {
	user_story.convertInvoiceNumbers(function(result) {
		res.send(result);
	})
})

module.exports = router;	