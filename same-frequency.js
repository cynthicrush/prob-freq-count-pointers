// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const string1 = num1.toString()
    const string2 = num2.toString()

    const string1Count = {}
    const string2Count = {}

    for(let char of string1) {
        string1Count[char] = ++string1Count[char] || 1
    }
    // console.log('string1count', string1Count)

    for(let char of string2) {
        string2Count[char] = ++string2Count[char] || 1
    }
    // console.log('string2count', string2Count)
    // console.log('string2count length', Object.keys(string2Count).length)

    for(let char in string1Count) {
        if(!string2Count[char]) {
            return false
        } else if(Object.keys(string1Count).length !== Object.keys(string2Count).length) {
            return false
        } else if(string1Count[char] !== string2Count[char]) {
            return false
        }else {
            return true
        }
        
    }
}
// Object.keys(myObj).length
// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false
