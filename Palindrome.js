function palindrome(word) {
    let reversed = word.split('')
        .reverse()
        .join("")
    if (reversed === word){
        return true
    }
    return false
    
}
