function circularArrayRotation(a, k, queries) {
    // Write your code here
    console.log(`a: ${a}`);
    console.log(`k: ${k}`);
    console.log(`queries: ${queries}`);
    let result = []; // here we will store the result
    let len = a.length; // length of the array
    console.log(`len: ${len}`);
    // rotate the array k times
    console.log(`a.slice(len - k % len): ${a.slice(len - k % len)}`);
    console.log(`a.slice(0, len - k % len): ${a.slice(0, len - k % len)}`);
    let arr = a.slice(len - k % len).concat(a.slice(0, len - k % len)); 
    console.log(`arr: ${arr}`);
    // first we calculate k % len to avoid unnecessary rotations, be sure than k < len
    // for example if k = 7 and len = 5, we only need to rotate the array 2 times because 7 % 5 = 2
    // then we slice the array in two parts, the first one from len - k % len to the end
    // for example if a = [1, 2, 3, 4, 5] and k = 7, we slice from 5 - 7 % 5 = 5 - 2 = 3 to the end this is [3, 4, 5]
    // and the second part from the beginning to len - k % len this is [1, 2]
    // finally we concat both parts and we get [4, 5, 1, 2, 3]

    // now we only need to get the elements in the queries positions
    // for example if queries = [0, 1, 2] we need to get the elements in the positions 0, 1 and 2
    for (let query of queries) {
        console.log(`query: ${query}`);
        console.log(`arr[query]: ${arr[query]}`);
        // we push the element in the query position to the result array
        result.push(arr[query]);
        console.log(`result: ${result}`);
    }
    // finally we return the result array wich is the answer in this example is [4, 5, 1]
    console.log(`result: ${result}`);
    return result;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])); // [2, 3, 1]
console.log(circularArrayRotation([1, 2, 3, 4, 5], 7, [0, 1, 2])); // [ 4, 5, 1]