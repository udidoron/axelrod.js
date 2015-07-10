
var Strategy = require("../strategy");

class RandomStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "RandomStrategy");
	}

	willCooperate(...params) {
		return Math.random() > 0.5;
	}

}

module.exports = RandomStrategy;