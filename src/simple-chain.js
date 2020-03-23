const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.getLength()) {
			this.chain = [];
			throw Error();
		} 
		this.chain.splice(position - 1, 1);
		return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join('~~');
		this.chain = [];
		return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
