let result = [139, 234, 229, 23, 42, 45, 43, 433, 344, 344, 2, 3, 3, 2]

let uniqueArray = [];

for (let i = 0; i < result.length; i++) {
    let uni = result[i];
    let index = uniqueArray.indexOf(uni);

    if (index == -1) {
        uniqueArray.push(uni);
    }
}
console.log(uniqueArray)

function add(a, b){

    return a + b;

}

console.log(add("adam" + "eve"))