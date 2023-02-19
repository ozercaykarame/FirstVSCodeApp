let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbersOdd = numbers.map(x => {
    if (x % 2 === 1) {
        return x;
    }
});

for(j=0;j<=numbers.length;j++)
{
    alert('Hello'+String(j));
}