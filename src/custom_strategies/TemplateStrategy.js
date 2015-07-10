
var Strategy = require("../strategy");

class TemplateStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "TemplateStrategy");
	}

	/**
	 * Cooperates if the player tells it to - i.e. returns params.cooperate.
	 * @param params: {cooperate: boolean} (required).
	 */
	willCooperate(params) {
		return params && params.cooperate;
	}
}

module.exports = TemplateStrategy;