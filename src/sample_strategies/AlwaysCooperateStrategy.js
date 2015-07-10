
var Strategy = require("../strategy");

class AlwaysCooperateStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "AlwaysCooperateStrategy");
	}

	willCooperate(...params) {
		return true;
	}
}

module.exports = AlwaysCooperateStrategy;