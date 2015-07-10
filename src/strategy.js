
/**
 * In Java this would be an interface, but this is JS, so we're lucky to have Classes.
 * In general: template for a Strategy. 
 * Contains one property, 'name', for convenience.
 * Also contains a getter & setter for 'name', and one method, 'willCooperate()', 
 * which receives any number of parameters and acts according to them,
 * eventually returning cooperate:Boolean (false = defect).
 */
class Strategy {

	constructor(name) {
		this._name = (name)? name : "";
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	willCooperate(...params) {
		return true;
	}
	
}


module.exports = Strategy;