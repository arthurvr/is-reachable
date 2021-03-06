'use strict';
var test = require('ava');
var isReachable = require('./');

test(function (t) {
	t.plan(2);

	isReachable('google.com', function (err, reachable) {
		t.assert(reachable);
	});

	isReachable('343645335341233123125235623452344123.com', function (err, reachable) {
		t.assert(!reachable);
	});
});
