
var Strategy = require("../strategy");

class AlwaysDefectStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "AlwaysDefectStrategy");
	}

	/**
	 * Always defects (returns false), as per its definition.
	 */
	willCooperate(params) {
		return false;
	}
}

module.exports = AlwaysDefectStrategy;