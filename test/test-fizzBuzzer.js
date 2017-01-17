const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it ("should return 'fizz-buzz' for multiples of 15", function() {
		const normalCases = [
			15, 30, 45, 60, 600, 0, -15
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal("fizz-buzz");
		});
	});

	it("should return 'fizz' for multiples of 3 (that aren't multiples of 5).", function() {
		const normalCases = [
			3, 6, 9, 27, 273, -3
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal("fizz");
		});
	});

	it("should return 'buzz' for multiples of 5 (that aren't multiples of 3).", function() {
		const normalCases = [
			5, 10, 20, 25, 35, -5
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal("buzz");
		});
	});

	it("should return the input for numbers that aren't multiples of 3 or 5.", function() {
		const normalCases = [
			1, 2, 7, -1, -4, 1.3, 2.5
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal(input);
		});
	});

	it("should throw error for inputs that are not numbers.", function() {
		const badInputs = [
			true, false, "Hello, world!", "", null, /[abc]{3}/, {"hello": "world"}
		];
		badInputs.forEach(function(input) {
			(function () {
			fizzBuzzer(input);
			}).should.throw(Error);
		});
	});

});