function uniqueWords(arr) {
    let uniqueWords = new Set()
    for (let str of arr) {
        let words = str.split(/[^a-zA-z0-9_]+/).filter(a => a !== '')
        for (let w of words) {
            uniqueWords.add(w.toLowerCase())
        }
    }
    console.log([...uniqueWords.values()].join(', '))
}