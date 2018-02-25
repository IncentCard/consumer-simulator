// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require('./F.js');

function Account(options) {
	options = F.def(options, {});
	this.min_payment_amount = F.def(options.min_payment_amount, 25.00)
	this.min_payment_rate = F.def(options.min_payment_rate, 0.0100)
	this.limit = F.def(options.limit, 1000.00);
	this.apr = F.def(options.apr, 0.2499);
	this.cbr = F.def(options.cbr, 0.1000);
	this.balance = 0.00;
	this.history = [];
	this.piggy_bank = 0.00;
	
	this.payment_pattern = options.payment_pattern;
	this.spend_pattern = options.spend_pattern;
	
}
Account.prototype.show_history = function(months) {
	return this.history.slice(-months);
};
Account.prototype.simulate = function(months) {
	for(var i=0;i<months;i++) {
		var record = {
			balnce_som: this.balance,
			spend: this.spend_pattern[0].apply(null, [this].concat(this.spend_pattern[1])),
			pay  : Math.min(this.balance, this.payment_pattern[0].apply(null, [this].concat(this.payment_pattern[1])))
		};
		record.cash  = record.spend * this.cbr,
		record.balance_eom = record.balnce_som - record.pay;
		record.balance_eom = record.balance_eom + record.balance_eom * (this.apr / 12.0);
		record.balance_eom = record.balance_eom + record.spend;
		
		this.balance = record.balance_eom;
		this.piggy_bank = this.piggy_bank + record.cash;
		this.history.push(record);
	}
};
module.exports = Account;