//variable
var time = '10:15pm'; //string
var bookprice = 150;    //numeerical
var isWhiteColor = false;

//array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidiIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditionals
if (bookprice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('Mama, Kisu Discount Den na! Please?')
}

//loop
var i = 0;
while (i <= 17) {
    //do some work 
    i++;
}

for (var i = 0; i < 17; i++) {
    console.log()
}

//function

function isMoonUp() {
    if (time >= 19 && time <= 5) { //parameters sometimes
        return true;
    }
    return true;
}

//calling function
var moonStatus = isMoonUp(21);

// let const var declare kora jay.

//value of the variable may change

var price = 27;
price = 29;
price = 31;
//value of the variable will not change
const myName = 'lal e lal Mr. Helal';
console.log(myName);
myName = 22;
