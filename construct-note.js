// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageCount = {}
    const lettersCount = {}

    for(let char of message) {
        messageCount[char] = ++ messageCount[char] || 1
    }

    for(let char of letters) {
        lettersCount[char] = ++ lettersCount[char] || 1
    }

    for(let char in messageCount){
        if(!lettersCount[char]) {
            return false
        }
        if(messageCount[char] > lettersCount[char]) {
            return false
        }
    }
    // console.log('message', messageCount)
    // console.log('letters', lettersCount)        
    return true

}

// console.log(constructNote('aa', 'abc')) // false
// console.log(constructNote('abc', 'dcba')) // true
// console.log(constructNote('aabbcc', 'bcabcaddff')) // true
