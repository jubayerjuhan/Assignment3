let speach = 'Google LLC is an American multinational technology company'

let count = 0;
for (let i = 0; i < speach.length; i++) {
    let char = speach[i];
    // console.log(char)
    if (char == " ") {
        count++;
    }
    
}
console.log('There Is ',(count+1), 'Word In The String');
