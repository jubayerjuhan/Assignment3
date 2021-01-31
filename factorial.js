let number = prompt('Enter The Number You Want To See The Fatorial Of');

function calculateFactorial(factLength) {
    let factorial = 1;
    for (let index = 1; index <= factLength; index++) {
        factorial = factorial * index;
    }

    return factorial;
}

let showFactorial = calculateFactorial(number);
console.log(showFactorial);