var inputInch = prompt('Enter How Many Inches');
// console.log(inputInch);

function convertToFT(howInch) {
    var result = (howInch/12);
    var finalResult = result.toFixed(2);
    console.log(finalResult);
    return finalResult;
}
// alert(`The Inches Converted To ${finalResult} Inches`);
convertToFT(inputInch);