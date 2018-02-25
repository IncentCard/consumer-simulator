// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require('./F.js');

PaymentPattern = {
	pay_amount: function(account, amount) {
		return F.float(amount);
	},
	pay_min: function(account) {
		return F.float(account.min_payment);
	},
	pay_percent: function(account, percent) {
		return F.float(account.balance) * F.float(percent);
	}
	
};
module.exports = PaymentPattern;
