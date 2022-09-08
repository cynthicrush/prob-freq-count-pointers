// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    // const result = new Object()
    // let currentKey = ''
    // let currentValue = null

    // for(let i = 0; i < keys.length; i++){
    //     console.log('i', keys[i])
    //     currentKey = keys[i]
    // }
    // for(let j = 0; j < values.length; j++){
    //     console.log('j', values[j])
    //     currentValue = values[j]
    // }
    // if(currentValue === undefined) {
    //     result.currentKey = null
    // } else {
    //     result.currentKey = currentValue
    // }
    
    // console.log(result) 
    return keys.reduce((obj, cur, idx) => {
        obj[cur] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
}
// console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
// console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}