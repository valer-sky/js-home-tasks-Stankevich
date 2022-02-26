// CODING CHALLENGE 5
// Loops and iteration

// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

"use strict";

var jhon = {
    family: 'Jhon`s',
    bills: [124, 48, 268, 180, 42],
    arrTips: [],      // массив для хранения чайевых оставленных джоном
    arrBillTips: [],   // массив для хранения  оплаченых счетов включая чайевые
    calcTips: function () {   // метод расчета чайевых
        for ( var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.arrTips.push(this.bills[i] * 0.2);
                } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.arrTips.push(this.bills[i] * 0.15);
                } else {
                this.arrTips.push(this.bills[i] * 0.1);
                }
            this.arrBillTips.push(this.arrTips[i] + this.bills[i]);
            }
        }
}; 
jhon.calcTips();

// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

var mark = {
    family: 'Mark`s',
    bills: [77, 375, 110, 45],
    arrTips: [],                         // массив для хранения чайевых оставленных марком
    arrBillTips: [],                   // массив для хранения  оплаченых счетов включая чайевые
    calcTips: function () {               // метод расчета чайевых
        for ( var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.arrTips.push(this.bills[i] * 0.2);
                } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.arrTips.push(this.bills[i] * 0.1);
                } else {
                this.arrTips.push(this.bills[i] * 0.25);
                }
            this.arrBillTips.push(this.arrTips[i] + this.bills[i]);
            }
        }
}; 
mark.calcTips();

// Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// Calculate the average tip for each family
// Log to the console which family paid the highest tips on average

var sum = 0;
function calcAverage (tips) {    // функция для подсчета средней суммы чайевых каждой семьи
    for (var i = 0; i < tips.length; i++) {  // цикл для перебора и последующего сумирования всех чайевых
        sum += tips[i];
    }
    return sum / tips.length; //  среднее количество выплаченных чаевых.
}

console.log('The average tip for Jhon`s family' + ' ' + calcAverage(jhon.arrTips));
console.log('The average tip for Mark`s family' + ' ' + calcAverage(mark.arrTips));

if (calcAverage(jhon.arrTips) > calcAverage(mark.arrTips)) {
    console.log(jhon.family + 'family paid the highest tips on average');
    } else if (calcAverage(jhon.arrTips) < calcAverage(mark.arrTips)) {
    console.log(mark.family + ' '+ 'family paid the highest tips on average');
    } else {
    console.log(mark.family + jhon.family + 'families paid the same');
}



