function processOddNumbers(arr) {
    console.log(arr.filter((e, i) => i % 2 !== 0).map(e => e * 2).reverse())
}
processOddNumbers([1, 2, 3, 4, 5, 6])