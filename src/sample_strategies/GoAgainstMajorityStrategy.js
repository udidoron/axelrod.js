
var Strategy = require("../strategy");

class GoAgainstMajorityStrategy extends Strategy {
	
	constructor(name) {
		super((name)? name : "GoAgainstMajorityStrategy");
	}

	/**
	 * If it's the first turn, the strategy cooperates.
	 * Otherwise, the strategy looks at the history of the other player's actions,
	 * counting the total number of defections and cooperations by the other player;
	 * it then does whatever the other player did least
	 * (defect if the other player defected more than cooperated, cooperate otherwise).
	 * @param params: 
	 * 		{turnNum: int >= 0, rivalMoves: array of booleans where true=cooperated, false=defected} 
	 * 		(both parameters are required).
	 * If any parameter in 'params' is not supplied, the strategy will cooperate.
	 */
	willCooperate(params) {
		if (!params || !params.turnNum || !params.rivalMoves)
			return true;

		if (params.turnNum === 0) 
			return true;

		//counting cooperations and defections
		let cooperationsCount=0, defectionsCount=0;
		const rivalMoves = params.rivalMoves;
		for (let index=0; index<rivalMoves; index++) {
			if (rivalMoves[index]) 
				cooperationsCount++;
			else
				defectionsCount++;
		}

		return cooperationsCount < defectionsCount;
	}

}

module.exports = GoAgainstMajorityStrategy;