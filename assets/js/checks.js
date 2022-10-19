// Check Methods

const checkMethods = {

    checkKey(key, functionsArray) {
        functionsArray.forEach(obj => {
            if (obj.key.toLowerCase() == key.toLowerCase()) {
                obj.func();
            }
        });
    },

    checkArray(array, windowHeight) {
        array.forEach((item, index) => {
            if (item.y > windowHeight) {
                array.splice(index, 1);
            }
        });
    },

}

export { checkMethods };