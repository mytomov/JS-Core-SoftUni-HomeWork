function diagonalSum(matrix) {
    let rightDiagonal = 0
    let leftDiagonal = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                rightDiagonal += matrix[row][col]
                leftDiagonal += matrix[row][matrix.length - 1 - row]
            }
        }
    }
    console.log(rightDiagonal + ' ' + leftDiagonal)
}
