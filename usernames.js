function usernames(arr) {
    let finalResult = []
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('@')
        let domains = tokens[1].split('.')
        let result = tokens[0] + '.'
        for (let str of domains) {
            result += str[0]
        }
        finalResult.push(result)
    }
    console.log(finalResult.join(', '))
}