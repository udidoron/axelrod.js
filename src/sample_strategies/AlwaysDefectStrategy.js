
var Strategy = require("../strategy");

class AlwaysDefectStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "AlwaysDefectStrategy");
	}

	willCooperate(...params) {
		return false;
	}
}

module.exports = AlwaysDefectStrategy;