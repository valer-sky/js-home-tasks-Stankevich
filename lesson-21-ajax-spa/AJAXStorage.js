// В проекте DRINKS разработать класс TAJAXStorage (в модуле AJAXStorage.js) для сохранения информации о напитках,
// кроме сохранения в локальном хэше, также и на удалённом сервере (обмен данными с сервером — через AJAX, сервис AjaxStringStorage2).

"use strict";
let hashStorage = {};
function TAJAXStorage() {
	
   
	TAJAXStorage.prototype.addValue = function(key, value) {
        hashStorage[key] = value;
    };
    TAJAXStorage.prototype.getValue = function(key) {
		return hashStorage[key];
	};

	TAJAXStorage.prototype.deleteValue = function(key) {
		if (!(key in hashStorage)) {
			return false;
	}
    };
    TAJAXStorage.prototype.getKeys = function() {
		var keys = [];
			for (var key in hashStorage) {
			keys.push(key);
		}
		return keys;
	};


}	

function DrinkAjaxStorage() {
    this.setLoc = function () {
        storeInfo();
    }
}

function restoreInfo() {
    $.ajax(
        {
            url: "https://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: { f: 'READ', n: 'STANKEVICH_VALERY_AJAX_STORAGE_DRINKS' },
            success: readReady,
            error: errorHandler
        }
    );
}

function readReady(callresult) {
    if (callresult.error != undefined) {
        alert(callresult.error);
    }
        
    else if (callresult.result != "") {
        this.hashStorage = JSON.parse(callresult.result);
    }
}
restoreInfo();
 let updatePassword;
function storeInfo() {
    updatePassword = Math.random();
    $.ajax({
        url: "https://fe.it-academy.by/AjaxStringStorage2.php",
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: { f: 'LOCKGET', n: 'STANKEVICH_VALERY_AJAX_STORAGE_DRINKS', p: updatePassword },
        success: lockGetReady,
        error: errorHandler
    }
    );
}

function lockGetReady(callresult) {
    if (callresult.error != undefined) {
        alert(callresult.error);
    }
        
    else {
        let info = hashStorage;
        $.ajax({
            url: "https://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: { f: 'UPDATE', n: 'STANKEVICH_VALERY_AJAX_STORAGE_DRINKS', v: JSON.stringify(info), p: updatePassword },
            success: updateReady,
            error: errorHandler
        }
        );
    }
}
    
function updateReady(callresult) {
    if (callresult.error != undefined) {
        alert(callresult.error);
    }
        
}

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}