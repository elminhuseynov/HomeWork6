
let sum = 9
let sum2 = 0
while( sum < 99 ){
    sum += 2
    console.log(sum)
    sum2 += sum
}
console.log(sum2)



const input = +prompt("Zəhmət olmasa bir ədəd daxil edin:");

    let a = 0;
    let i = 100;

    while (i <= 998) {
        i++
        if (i % input === 0) {
            a += i;
        }
    }

console.log(a);


