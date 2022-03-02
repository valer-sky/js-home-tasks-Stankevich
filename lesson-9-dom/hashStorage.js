"use strict";

function tHashStorage() {
	this.hachStorage = {};
}
tHashStorage.prototype.addValue = function(key, value) {
	this.hashStorage[key] = value;
}
tHashStorage.prototype.getValue = function(key) {
	return this.hashStorage[key];
	}
tHashStorage.prototype.deleteValue = function(key) {
	if (!(key in this.hashStorage)) {
		return false;
	}
}
tHashStorage.prototype.getKeys = function() {
	var keys = [];
	for (var key in this.hashStorage) {
		keys.push(key);
	}
	return keys;
}



