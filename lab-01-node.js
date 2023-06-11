/*
    CIT281 Lab1
    Name: Taki Alyasri
*/

function square(num) {
    return num * num;
}

console.log('Square operations:')

for (let i = 2; i <= 10; i+=2) {
    console.log(`Square of ${i} is ${square(i)}`);
}