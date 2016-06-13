/**
* sort - The Sort Module
* @namespace sort
* @extends VCUUtils
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 1.0.0
* @example
* VCUUtils.sort
*/
/* jshint strict: false */
VCUUtils.sort = VCUUtils.sort || {};

/**
* Alphebetically bubble-sorts an array via an object key
* @function sort.array.viaObjectKey
* @param {array} array - The array you'd like to sort
* @param {string} parameter - The object key you'd like to sort by
* @returns {array} an alphebetically sorted array
* @example
* VCUUtils.sort.array.viaObjectKey(array, string);
*/
VCUUtils.sort.array.viaObjectKey = function (array, parameter) {
    // Empty swapped variable
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i][parameter] > array[i + 1][parameter]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
};

/**
* Reverse-alphebetically bubble-sorts an array via an object key
* @function sort.array.viaObjectKey
* @param {array} array - The array you'd like to sort
* @param {string} parameter - The object key you'd like to sort by
* @returns {array} an alphebetically sorted array
* @example
* VCUUtils.sort.array.viaObjectKey.reverse(array, string);
*/
VCUUtils.sort.array.viaObjectKey.reverse = function (array, parameter) {
    // Empty swapped variable
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i][parameter] < array[i + 1][parameter]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
};
