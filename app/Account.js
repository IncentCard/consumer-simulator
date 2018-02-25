// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require('./F.js');

function Account(options) {
	options = F.def(options, {});
	this.min_payment = F.def(options.min_payment, 25.00)
	this.limit = F.def(options.limit, 1000.00);
	this.apr = F.def(options.apr, 0.2499);
	this.balance = 0.00;
	this.history = [];
	
	this.payment_pattern = options.payment_pattern;
	this.spend_pattern = options.spend_pattern;
	
}
Account.prototype.show_history = function(months) {
	return this.history.slice(-months);
};
Account.prototype.simulate = function(months) {
	for(var i=0;i<months;i++) {
		var record = {
			start: this.balance,
			spend: this.spend_pattern[0].apply(null, [this].concat(this.spend_pattern[1])),
			pay:   Math.min(this.balance, this.payment_pattern[0].apply(null, [this].concat(this.payment_pattern[1])))
		};
		record.final = record.start - record.pay;
		record.final = record.final + record.final * this.apr;
		record.final = record.final + record.spend;
		this.balance = record.final;
		this.history.push(record);
	}
};
module.exports = Account;