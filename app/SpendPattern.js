// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require('./F.js');

SpendPattern = {
	spend_amount: function(account, amount) {
		return F.float(amount);
	},
	spend_percent: function(account, percent) {
		return F.float(account.limit) * F.float(percent);
	}
	
};
module.exports = SpendPattern;
