const reverseString = function(str) {
    let len = str.length-1;
    let res = '';
    for (len; len >= 0; len--){
        res += str[len];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
