function matchWords(str) {
    let regex = /[a-zA-Z0-9_]+/g
    console.log(str.match(regex).join('|'))
}