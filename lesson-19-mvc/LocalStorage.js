"use strict";

function THashStorage() {
	this.hashStorage = {};
}
THashStorage.prototype.addValue = function(key, value) {
	this.hashStorage[key] = value;
};
THashStorage.prototype.getValue = function(key) {
	return this.hashStorage[key];
	};
THashStorage.prototype.deleteValue = function(key) {
	if (!(key in this.hashStorage)) {
		return false;
	}
};
THashStorage.prototype.getKeys = function() {
	var keys = [];
	for (var key in this.hashStorage) {
		keys.push(key);
	}
	return keys;
};




