const removeFromArray = function(array, ...num) {

    for(let j = 0; j < array.length; j++) {


       for(let i = 0; i < num.length; i++) {


            let index = array.indexOf(num[i]);
            if(index == -1) {
                continue;
            }
            array.splice(index, 1);

        }
    }

    return array

};

// Do not edit below this line
module.exports = removeFromArray;
