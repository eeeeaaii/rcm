/*
This file is part of Vodka.

Vodka is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Vodka is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Vodka.  If not, see <https://www.gnu.org/licenses/>.
*/
// tests are failing because here I automatically throw/bail if any arg is 
// an error, but I implemented the string-split (I think) in the original
// integration tests such that it assumes that one of the arguments is
// an error. so I have to make a decision about what happens.
// 2. getParent and setSelected don't even make sense in a multirender
// world unless I have two notions: the node, and the nex.

class LambdaArgEvaluator {
	constructor(params, argContainer, bindEnv, argEnv, debugstr) {
		this.params = params;
		this.argContainer = argContainer;
		this.bindEnv = bindEnv;
		this.argEnv = argEnv;
		this.numRequiredParams = params.length;
		this.debugstr = debugstr;
	}

	checkNumParams() {
		if (this.argContainer.numArgs() < this.numRequiredParams) {
			throw new EError("Hey so in this user-defined lambda function, "
				+ " there were not enough args passed in. It needs"
				+ ` ${this.numRequiredParams} but you passed in ${this.argContainer.numArgs()}.`
				+ ` You might have bound this function`
				+ ` to a name at some point, but that name isn't available`
				+ ` to this error handler. However you might recognize the function`
				+ ` if we give you a`
				+ ` textual representation of the function definition`
				+ ` - so here goes: ${this.debugstr}`);
		}
	}	

	processArgument(arg) {
		let r = evaluateNexSafely(arg, this.argEnv);
		return r;
	}

	processAllArgs() {
		for (let i = (this.skipFirstArg ? 1 : 0); i < this.argContainer.numArgs(); i++) {
			let arg = this.argContainer.getArgAt(i)
			let argval = this.processArgument(arg);
			if (argval.getTypeName() == '-error-' && argval.getErrorType() == ERROR_TYPE_FATAL) {
				throw wrapError('&#8907;', `Okay so when we were evaluating the args of this`
					+ ` user-defined lambda function, we encountered an error in`
					+ ` argument number ${i+1} and we have to stop running the program.`
					+ ` The error is enclosed. You might have bound this function`
					+ ` to a name at some point, but that name isn't available`
					+ ` to this error handler. However you might recognize the function`
					+ ` if we give you a`
					+ ` textual representation of the function definition`
					+ ` - so here goes: ${this.debugstr}`, argval);
			}
			this.argContainer.setArgAt(
				argval,
				i);
		}
	}

	bindArgs() {
		for (let i = 0; i < this.params.length; i++) {
			this.bindEnv.bind(this.params[i], this.argContainer.getArgAt(i));
		}
	}

	evaluateAndBindArgs() {
		this.checkNumParams();
		this.processAllArgs();
		this.bindArgs();
	}	
}
