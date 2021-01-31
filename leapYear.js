let inputYear = prompt('Enter Year')

function leapYear(year) {
    // let reminder = year % 4;

    if ( (year%4 == 0) && (year%100 == 0) || (year%400 == 0) ) {
        console.log('This Year Is a Leap Year')
    } else {
        console.log('Nope this is not a leap year');
    }
}

leapYear(inputYear);
