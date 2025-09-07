let count = 0;

let val = setInterval(() => {
    console.log(count++);
    if (count > 5)
        clearInterval(val);
}, 1000);

console.log('hello hamid')

