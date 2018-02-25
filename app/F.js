// consumer simulator: IncentCard.com comuser spending simulator
// Copyright (C) 2018  David Ulrich

F = {};
F.def = function(v,d) {
	return F.isdef(v) ? v : d;
};
F.float = function(n) {
	var f;
	f = parseFloat(n);
	return isFinite(f) ? f : 0;
};
F.ifdef = function(v,a,b) {
	return F.isdef(v) ? a : b;
};
F.int = function(n, b) {
	return parseInt(n,b||10) | 0; // jshint ignore:line
};
F.isarray = function(a) {
	return a instanceof Array;
};
F.isdef = function(v) {
	return v !== null && typeof v !== "undefined";
};
F.isfn = function(f) {
	return typeof f === "function";
}

module.exports = F;