var Park = function(){
	this.enclosure = [];
};

Park.prototype = {
	addDinosaur: function(dinosaur){
		this.enclosure.push(dinosaur)
	},



	// findBigLitters: function(){
	// 	for(var dinosaur of this.enclosure){
	// 		if(dinosaur.litter > 2){
	// 			return dinosaur.species;
	// 		}
	// 	}
	// }
};





module.exports = Park;
