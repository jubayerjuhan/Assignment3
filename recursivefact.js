function recursiveFactorial(num) {
    if (num == 1) {
        return 1;
    }

    else{
        return num * recursiveFactorial(num - 1)
    }
}

let res = recursiveFactorial(5);
console.log(res);