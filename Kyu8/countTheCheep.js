const countSheep = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += `${i} sheep... `
    }
    return str;
}

console.log(countSheep(3));