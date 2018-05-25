function primeNumberCheck(nums) {
    let  prime = true
    for (let i = 2; i <= Math.sqrt(nums); i++) {
        if (nums % i === 0){
            prime = false
            break
        }

    }
     return prime && nums > 1
}
console.log(primeNumberCheck(81))