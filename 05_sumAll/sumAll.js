const sumAll = function(x, y) {
    res = 0;
    if (x < 0 || y < 0){
        return 'ERROR';
    }

    if (typeof x != 'number' || typeof y != 'number'){
        return 'ERROR';
    }

    if (x > y){
        let temp = x;
        x = y;
        y = temp;
    }

    for (x; x < y + 1; x++){
        res += x;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
