
// ترتيب العداد من الصغير الى الكبير ثم قلبها بالمعكوس

function descendingOrder(n) {
    let arr = n.toString().split('');
    let arrNum = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arrNum.push(parseInt(arr[i]));
        console.log(arrNum)
    }
    let sorted = arrNum.sort(function (a, b) { return b - a });
    let sorted2 = sorted.join('');
    return parseInt(sorted2);
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(123456789));



// ترتيب العداد

function descendingOrder2(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

let arr2 = 71723588457
console.log(arr2.toString().split('').sort().join(''))


console.log(descendingOrder2(0));
console.log(descendingOrder2(13333333));
console.log(descendingOrder2(1255554569));

let abdulwahab5 = 5499767

console.log(abdulwahab5.toString().split('').sort())
console.log(abdulwahab5.toString().split('').sort().join('.'))
console.log(abdulwahab5.toString().split('').sort().reverse().join('*'))
