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
    arrTips: [],
    arrBillTips: [],
    calcTips: function() {
        for (var i = 0; this.bills.length < 0; i++) {
            if (this.bills[i] < 50) {
                this.arrTips.push(this.bills[i] * 0.2);
                } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.arrTips.push(this.bills[i] * 0.15);
                } else {
                this.arrTips.push(this.bills[i] * 0.1);
                }
            }
            
            this.arrBillTips.push(this.arrTips[i] + this.bills[i]);
            }
        
}; 
jhon.calcTips();
console.log(jhon.arrTips);
