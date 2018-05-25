function firstAndLastK(arr) {
    let n = Number(arr.shift())
    console.log(arr.slice(0, n))
    console.log(arr.slice(arr.length - n))
}
firstAndLastK([3, -2, 3, -4, 5])