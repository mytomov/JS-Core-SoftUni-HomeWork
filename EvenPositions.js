function evenPositionsElements(arr) {
    console.log(arr.filter((el, i) => {
        return i % 2 === 0
    }).join(' '))
}
evenPositionsElements([1, 2, 3, 4, 5, 6])