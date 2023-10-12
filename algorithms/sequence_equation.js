

// example: [2,3,1] output: [2,3,1]
// example: [4,3,5,1,2] output: [1,3,5,4,2]
function permutationEquation(p) {
    // Write your code here
    // result is the array that we will return at the end
    let result = [];
    // len is the length of the array
    let len = p.length;
    // arr is the array that we will use to store the position of each element
    let arr = [];
    // we loop through the array and store the position of each element
    for (let i = 0; i < len; i++) {
        // we store the position of the element in the position of the element plus one
        // arr[p[i]] is the position of the element p[i] and i + 1 is the value that we want to store
        arr[p[i]] = i + 1;
        console.log(`arr[p[i]]: ${arr[p[i]]} = i + 1: ${i + 1}`);
        // arr[2] = 0 + 1 = 1     --     because p[0] = 2
        // arr[3] = 1 + 1 = 2     --     because p[1] = 3
        // arr[1] = 2 + 1 = 3     --     because p[2] = 1

        // check the following exammple with the array [4,3,5,1,2]
        // arr[4] = 0 + 1 = 1     --     because p[0] = 4 
        // arr[3] = 1 + 1 = 2     --     because p[1] = 3
        // arr[5] = 2 + 1 = 3     --     because p[2] = 5
        // arr[1] = 3 + 1 = 4     --     because p[3] = 1
        // arr[2] = 4 + 1 = 5     --     because p[4] = 2
    }
    console.log(`arr: ${arr}`);
    // arr: ,3,1,2
    // arr: ,4,5,2,1,3  this is the result of the set each arr[p[i]] = i + 1 in the previous loop

    // now we loop through the array and push the element in the position of the element
    for (let i = 1; i <= len; i++) {
        // we push the element in the position of the element
        result.push(arr[arr[i]]);
        // this means that the element in the position i is the element in the position arr[i]
        // for example if i = 1, arr[i] = 4, arr[arr[i]] = arr[4] = 1
        console.log(`result: ${result}`);
        // check the following exammple with the array [4,3,5,1,2]
        // result.push(arr[arr[1]]) = result.push(arr[4]) = result.push(1) = [1]
        // result.push(arr[arr[2]]) = result.push(arr[3]) = result.push(2) = [1, 3]
        // result.push(arr[arr[3]]) = result.push(arr[5]) = result.push(3) = [1, 3, 5]
        // result.push(arr[arr[4]]) = result.push(arr[1]) = result.push(4) = [1, 3, 5, 4]
        // result.push(arr[arr[5]]) = result.push(arr[2]) = result.push(5) = [1, 3, 5, 4, 2]
    }
    console.log(result);
    return result;
}

permutationEquation([2,3,1])
permutationEquation([4,3,5,1,2])