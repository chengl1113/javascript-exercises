const removeFromArray = function(array, arg1, arg2, arg3, arg4) {
    if (arg2 == undefined){
        for (let i = 0; i < array.length; i++){
            if (array[i] === arg1){
                array.splice(i,1);
            }
        }
        return array;
    }

    if (arg3 == undefined){
        for (let i = 0; i < array.length; i++){
            if (array[i] === arg1 || array[i] ===arg2){
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }

    if (arg4 == undefined){
        for (let i = 0; i < array.length; i++){
            if (array[i] === arg1 || array[i] === arg2 || array[i] === arg3){
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] === arg1 || array[i] === arg2 || array[i] === arg3 || array[i] ===arg4){
            array.splice(i,1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
