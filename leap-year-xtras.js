function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2024;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 2124;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);