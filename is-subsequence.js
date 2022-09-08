// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // let count = ''

    // for(let char1 of str1) {
    //     console.log('char1', char1)
    //     for(let char2 of str2) {
    //         console.log('char2', char2)
    //         if(char1 === char2) {
    //             count += char1
    //             console.log('count', count)
    //         }
    //     }
    // }
    // if (count.length === str1.length) {
    //     return true
    // } else {
    //     return false
    // }

    let same = 0
    let total = 0

    while(total < str2.length) {
        if(str1[same] === str2[total]) {
            same += 1
        }
        if(same === str1.length) {
            return true
        }
        total += 1
    }
    return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
