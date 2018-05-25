function countWordsWithMaps(arr) {
    let newMap = new Map()
    for (let str of arr) {
        let words = str.split(/[^A-Za-z0-9_]+/).filter(s => s.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if (newMap.has(word)){
               newMap.set(word, (newMap.get(word) + 1))
            }else {
                newMap.set(word, 1)
            }
        }
    }
    let sortedKeys = Array.from(newMap.keys()).sort((a,b) => a.localeCompare(b))
    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + newMap.get(key) + ' times')
    }
}
