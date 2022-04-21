let hesh = {};

function HashStorageFunc() { // класс 
    this.addValue = function (key, value) { // публичный метод 
        if (!(key in hesh)) {
            hesh[key] = value;
        }
    }
    this.getValue = function (key) {
        if (key in hesh) {
            return hesh[key];
        }
    }
    this.deleteValue = function (key) {
        if (key in hesh) {
            delete hesh[key];
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function () {
        return Object.keys(hesh);
    }
}


///////////////////////////////// ajax

function DrinkAjaxStorage() {
    this.setLoc = function () {
        storeInfo();
    }
}


let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
let stringName = 'GRUSHEVSKIY_AJAX_STORAGE_DRINKS';

function restoreInfo() {
    $.ajax(
        {
            url: ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: { f: 'READ', n: stringName },
            success: readReady,
            error: errorHandler
        }
    );
}

function readReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
    else if (callresult.result != "") {
        hesh = JSON.parse(callresult.result);
    }
}
restoreInfo();

function storeInfo() {
    updatePassword = Math.random();
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: { f: 'LOCKGET', n: stringName, p: updatePassword },
        success: lockGetReady,
        error: errorHandler
    }
    );
}
function lockGetReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
    else {
        let info = hesh;
        $.ajax({
            url: ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: { f: 'UPDATE', n: stringName, v: JSON.stringify(info), p: updatePassword },
            success: updateReady,
            error: errorHandler
        }
        );
    }
}

function updateReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
}


function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}

const drinkStorage = new HashStorageFunc();// создаем объект класса
const drinksAjaxStorage = new DrinkAjaxStorage();


function addDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        var alc = confirm('Напиток алкогольный?');
        var rec = prompt('Введите рецепт напитка');
        while (rec == "") {
            rec = prompt('Введите рецепт напитка');
        }
    }
    if (rec != null) {
        let alc_rec = {
            'Alcohol': (alc ? 'Да' : 'Нет'),
            'Reciepe': rec
        };
        drinkStorage.addValue(drink, alc_rec);// вызов метода addValue
        drinksAjaxStorage.setLoc();
    }
}

function getDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        let checkDrink = drinkStorage.getValue(drink);
        if (checkDrink) {
            alert(`
            напиток: ${drink}
            алкогольный: ${checkDrink["Alcohol"]}
            рецепт приготовления: ${checkDrink["Reciepe"]}`);
        } else {
            alert('Такого напитка не сущевствует')
        }
    }
}

function deleteDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        let checkDelete = drinkStorage.deleteValue(drink);
        if (checkDelete) {
            alert('Напиток удален');
            drinksAjaxStorage.setLoc();
        } else {
            alert('Такого напитка не существует');
        }
    }
}

function listOfDrink() {
    let arrayOfDrinks = drinkStorage.getKeys();
    if (arrayOfDrinks.length > 0) {
        alert(arrayOfDrinks);
    } else if (arrayOfDrinks.length == 0) {
        alert("Напитков нет");
    }
}