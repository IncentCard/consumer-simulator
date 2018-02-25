// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require("./F.js");

var Account = require("./Account.js")
var PaymentPattern = require("./PaymentPattern.js");
var SpendPattern = require("./SpendPattern.js");

var acc = new Account({
	payment_pattern: [PaymentPattern.pay_min, []],
	spend_pattern: [SpendPattern.spend_amount, [30.00]]
});
acc.simulate(3);

console.log(acc.show_history(3));
