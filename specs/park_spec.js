var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("park tests", function(){
	var park, dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5;

	beforeEach(function(){
		park = new Park();
		dinosaur1 = new Dinosaur("Alamosaurus", 3);
		dinosaur2 = new Dinosaur("Kentrosaurus", 1);
		dinosaur3 = new Dinosaur("Saltopus", 1);
		dinosaur4 = new Dinosaur("Lesothosaurus", 2);
		dinosaur5 = new Dinosaur("Alamosaurus", 1);
	});

	it("should start off with an empty enclosure", function(){
		assert.strictEqual(park.enclosure.length, 0);
	});

	it("should be able to add a dinosaur to the enclosure", function(){
		park.addDinosaur(dinosaur1);
		park.addDinosaur(dinosaur2);
		park.addDinosaur(dinosaur3);
		park.addDinosaur(dinosaur4);
		park.addDinosaur(dinosaur5);
		assert.strictEqual(park.enclosure.length, 5);
	});

	xit("should be able to remove all dinosaurs by type", function(){
		
	});

	xit("should get all dinosaurs with more than 2 offspring", function(){
		var bigLitters = park.findBigLitters();
		assert.deepStrictEqual(bigLitters, dinosaur1);
	});
});
