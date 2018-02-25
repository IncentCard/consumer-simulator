// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

var F = require("./F.js");

var Account = require("./Account.js")
var PaymentPattern = require("./PaymentPattern.js");
var SpendPattern = require("./SpendPattern.js");

var acc_min_pay = new Account({
	payment_pattern: [PaymentPattern.pay_min, []],
	spend_pattern: [SpendPattern.spend_amount, [410.00]],
	apr: 0.2800,
	cbr: 0.0700,
	min_payment_amount: 20.00
});
acc_min_pay.simulate(12);

console.log(acc_min_pay);