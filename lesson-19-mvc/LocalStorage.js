"use strict";

function TLocalStorage(lsKeyName) {
	this.lsHash = {};
	if (localStorage.getItem(lsKeyName)) {
		if (lsKeyName == "lsDrink") {
			var myObject = JSON.parse(localStorage.lsDrink);
			this.lsHash = myObject;
		}
	}
	TLocalStorage.prototype.addValue = function(key, value) {
	this.lsHash[key] = value;
};
	TLocalStorage.prototype.getValue = function(key) {
		return this.lsHash[key];
	};

	TLocalStorage.prototype.deleteValue = function(key) {
		if (!(key in this.lsHash)) {
			return false;
	}
};
	TLocalStorage.prototype.getKeys = function() {
		var keys = [];
			for (var key in this.lsHash) {
			keys.push(key);
		}
		return keys;
	};
	TLocalStorage.prototype.store = function() {
		localStorage.setItem(lsKeyName, JSON.stringify(this.lsHash));
	}

}