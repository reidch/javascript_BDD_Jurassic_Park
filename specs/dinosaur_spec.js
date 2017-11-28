var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("dinosaur tests", function(){

	var dinosaur;

	beforeEach(function(){
		dinosaur1 = new Dinosaur("Alamosaurus", 3);
		dinosaur2 = new Dinosaur("Kentrosaurus", 1);
		dinosaur3 = new Dinosaur("Saltopus", 1);
		dinosaur4 = new Dinosaur("Lesothosaurus", 2);
		dinosaur5 = new Dinosaur("Alamosaurus", 1);
	});

	it("should have a type", function(){
		assert.strictEqual(dinosaur1.species, "Alamosaurus");
	});

	it("should have a number of offspring per year", function(){
		assert.strictEqual(dinosaur2.litter, 1);
	});
});
