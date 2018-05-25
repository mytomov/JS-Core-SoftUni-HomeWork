function smallestNumber(arr) {
    console.log(arr.sort((a, b) => a - b).slice(0, 2))
}
smallestNumber([30, 15, 50, 5])