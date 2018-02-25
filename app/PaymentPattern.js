// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require('./F.js');

PaymentPattern = {
	pay_amount: function(account, amount) {
		return F.float(amount);
	},
	pay_min: function(account) {
		return Math.max(
			F.float(account.min_payment_amount),
			F.float(account.balance) * F.float(account.min_payment_rate)
		);
	},
	pay_rate: function(account, rate) {
		return F.float(account.balance) * F.float(rate);
	}
	
};
module.exports = PaymentPattern;
