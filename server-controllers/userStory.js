var line_by_line = require('n-readlines');
var fs = require("fs");
var input_user_story = new line_by_line(__dirname + '/input_user_story.txt');


module.exports = {

	convertInvoiceNumbers: function convertInvoiceNumbers(callback) {
		var converted_numbers = convertIntoDigits(input_user_story);
		fs.writeFile(__dirname + '/output_user_story_1.txt', converted_numbers, function (err, data) {
			if (err) {
				callback({ info: "Error while writing file" });
			} else {
				callback({ info: "Result saved in file output_user_story_1.txt in Server-Controllers folder"});
			}
		})
	}
}


var convertIntoDigits = function convertIntoDigits(invoice_numbers) {
	var digits = {
		" _ | ||_|": 0,

		"     |  |": 1,

		" _  _||_ ": 2,

		" _  _| _|": 3,

		"   |_|  |": 4,

		" _ |_  _|": 5,

		" _ |_ |_|": 6,

		" _   |  |": 7,

		" _ |_||_|": 8,

		" _ |_| _|": 9,

	}

	let line;
	let line_number = 0;
	let lines = []
	let number = [];
	let result = "";
	while (line = invoice_numbers.next()) {

		lines[line_number] = line.toString('ascii');

		line_number++;
		if (line_number > 2) {
			for (let i = 0; i < lines.length; i++) {
				for (let j = 0; j < lines[i].length / 3; j++) {


					if (!number[j]) {
						number[j] = '';
					}

					number[j] = number[j] + lines[i].substr(j * 3, 3);
				}

			}

			var number_line = '';

			for (let i = 0; i < number.length; i++) {

				number_line = number_line + digits[number[i]];
			}

			number_line = number_line + "\n"

			result = result + number_line;
			line = invoice_numbers.next();
			line_number = 0;
			lines = []
			number = [];
		};
	}

	return result;
}

