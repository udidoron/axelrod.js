
var Strategy = require("../strategy");

class TitForTatStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "TitForTatStrategy");
	}

	/**
	 * If it's the first turn, the strategy cooperates.
	 * Otherwise, it does whatever the rival strategy has done previously.
	 * @param params: {turnNum: int >= 0, previousRivalMove: boolean}, both required.
	 * If any parameter is not supplied, the strategy will cooperate.
	 */
	willCooperate(params) {
		if (!params || !params.turnNum || !params.previousRivalMove)
			return true;

		if (params.turnNum === 0) { //first turn, cooperate
			return true;
		}
		//otherwise, not first turn, return whatever rival has done previously
		return params.previousRivalMove;
	}
}

module.exports = TitForTatStrategy;