
var Strategy = require("../strategy");

class AlwaysCooperateStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "AlwaysCooperateStrategy");
	}

	/**
	 * Always cooperates (returns true), as per its definition.
	 */
	willCooperate(params) {
		return true;
	}
}

module.exports = AlwaysCooperateStrategy;