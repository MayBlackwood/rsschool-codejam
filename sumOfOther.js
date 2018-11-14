module.exports = function sumOfOther(arr){
    let result = [];
    let len = arr.length;
    let sum = 0;

    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
    for(let i = 0; i < len; i++){
        result.push(sum - arr[i]);
    }

    return result;
};