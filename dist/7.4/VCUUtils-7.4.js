'use strict';
/*jshint -W097*/

/**
* VCUUtils
* @module
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 2.4.0
*/
var VCUUtils = (function(utils) {

    /**
    * The version of VCUUtils in use
    * @member version
    * @returns {string} the VCUUtils version
    * @example
    * VCUUtils.version;
    */
    utils.version = '2.4.0_07.11.2016';

    /**
    * Todays date as a formatted date string
    * @member todaysDate
    * @returns {string} a date string (i.e. Friday, April 22, 2016)
    * @example
    * VCUUtils.todaysDate;
    */
    utils.todaysDate = (function() {
        var now = new Date(),
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            date = ((now.getDate() < 10) ? "0" : "") + now.getDate(),
            today = days[now.getDay()] + ", " + months[now.getMonth()] + " " + date + ", " + now.getFullYear();
        return today;
    })();

    /**
    * Document.write shorthand function
    * @member docwrite
    * @param {string} a string to be output on the page
    * @example
    * VCUUtils.docwrite(string);
    */
    utils.docwrite = function(string) {
        document.write(string);
    };

    return utils;

})(VCUUtils || {});

/**
* parseInj - The Injector Parsing Module
* @namespace parseInj
* @extends VCUUtils
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 1.0.1
* @example
* VCUUtils.parseInj
*/
/* jshint strict: false */
VCUUtils.parseInj = VCUUtils.parseInj || {};

/**
* Matches a string against a regex statement, and if true, returns the value between a beginning/ending injector
* @function parseInj.genInj
* @param {string} tag - The tag you want to check for
* @param {string} str - the string to parse for the injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.genInj("class", string);
*/
VCUUtils.parseInj.genInj = function (tag, str) {
    // Build a regex based off the tag given, then check the string against this
    var injStart = tag + ':{',
        injEnd = '}',
        rgxStr = injStart + '([^' + injEnd + ']+)\\' + injEnd,
        rgx = new RegExp(rgxStr, 'g'),
        match = str.match(rgx);
    // If there's a match...
    if (match !== null) {
        // Remove the start and end of the injector...
        return match[0].replace(injStart, '').replace(injEnd, '');
    }
};

/**
* Matches a string for the class injector (i.e. class:{...})
* @function parseInj.classInj
* @param {string} str - the string to parse for the class injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.classInj(string);
*/
VCUUtils.parseInj.classInj = function (str) {
    // Return of class:{...}
    return VCUUtils.parseInj.genInj('class', str);
};

/**
* Matches a string for the id injector (i.e. id:{...})
* @function parseInj.idInj
* @param {string} str - the string to parse for the id injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.idInj(string);
*/
VCUUtils.parseInj.idInj = function (str) {
    // Return of id:{...}
    return VCUUtils.parseInj.genInj('id', str);
};

/**
* Matches a string for the style injector (i.e. style:{...})
* @function parseInj.styleInj
* @param {string} str - the string to parse for the style injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.styleInj(string);
*/
VCUUtils.parseInj.styleInj = function (str) {
    // Return of style:{...}
    return VCUUtils.parseInj.genInj('style', str);
};

/**
* Matches a string for the layout injector (i.e. layout:{...})
* @function parseInj.layoutInj
* @param {string} str - the string to parse for the layout injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.layoutInj(string);
*/
VCUUtils.parseInj.layoutInj = function (str) {
    // Return of layout:{...}
    return VCUUtils.parseInj.genInj('layout', str);
};

/**
* Matches a string for the before HTML injector (i.e. before:{...})
* @function parseInj.beforeInj
* @param {string} str - the string to parse for the before injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.beforeInj(string);
*/
VCUUtils.parseInj.beforeInj = function (str) {
    // Return of before:{...}
    return VCUUtils.parseInj.genInj('before', str);
};

/**
* Matches a string for the after HTML injector (i.e. after:{...})
* @function parseInj.afterInj
* @param {string} str - the string to parse for the after injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.afterInj(string);
*/
VCUUtils.parseInj.afterInj = function (str) {
    // Return of after:{...}
    return VCUUtils.parseInj.genInj('after', str);
};

/**
* Matches a string for the cookie injector (i.e. cookie:{...})
* @function parseInj.cookieInj
* @param {string} str - the string to parse for the cookie injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.cookieInj(string);
*/
VCUUtils.parseInj.cookieInj = function(str) {
    // Return of cookie:{...}
    return VCUUtils.parseInj.genInj('cookie', str);
};

/**
* parseTemp - The Template Parsing Module
* @namespace parseTemp
* @extends VCUUtils
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 1.0.0
* @example
* VCUUtils.parseTemp
*/
/* jshint strict: false */
VCUUtils.parseTemp = VCUUtils.parseTemp || {};

/**
* Finds jade syntax within a string and converts it to standard HTML
* @function parseTemp.jade
* @param {string} str - the string to parse for jade syntax
* @returns {string} the string with jade syntax converted to standard HTML
* @example
* VCUUtils.parseTemp.jade(string);
*/
VCUUtils.parseTemp.jade = function (str) {
    var regExp = /#\[([^\]]+)\]/g,
        matches = str.match(regExp),
        output = str,
        cont = false,
        elementType, el, render, attrStr, innerStr;
    if (matches !== null) {
        for (var i = 0; i < matches.length; i++) {
            var match = matches[i],
                elementRgx = /#\[([^\(]+)\(/g,
                elementMatch = match.match(elementRgx);
            if (elementMatch !== null) {
                elementType = elementMatch[0].replace('#[', '').replace('(', '');
                cont = true;
            } else {
                var newStruct = match.replace(' ', '|');
                if (newStruct !== match) {
                    el = newStruct.match(/#\[([^\|]+)\|/);
                    var inner = newStruct.match(/\|([^\]]+)\]/);
                    render = '<' + el[1] + '>' + inner[1] + '</' + el[1] + '>';
                    output = output.replace(match, render);
                } else {
                    el = newStruct.replace('#[', '').replace(']', '');
                    render = '<' + el + '></' + el + '>';
                    output = output.replace(match, render);
                }
            }
            var attrRgx = /\(([^\)]+)\)/g,
                attrMatch = match.match(attrRgx);
            if (attrMatch !== null) {
                attrStr = " " + attrMatch[0].replace('(', '').replace(')', '').replace(/,/g, '');
            } else {
                attrStr = "";
            }
            var innerRgx = /\)([^\]]+)\]/g,
                innerMatch = match.match(innerRgx);
            if (innerMatch !== null) {
                innerStr = innerMatch[0].replace(')', '').replace(']', '');
            } else {
                innerStr = "";
            }
            if (cont === true) {
                var returnEl = '<' + elementType + attrStr + '>' + innerStr + '</' + elementType + '>';
                output = output.replace(match, returnEl);
            }
        }
        return output;
    } else {
        return output;
    }
};

/**
* siteConfig - The Site Config Module
* @namespace siteConfig
* @extends VCUUtils
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 1.0.0
* @example
* VCUUtils.siteConfig
*/
/* jshint strict: false */
VCUUtils.siteConfig = VCUUtils.siteConfig || {};

/**
* Matches a string against a regex statement, and if true, returns the value between a beginning/ending injector
* @function siteConfig.nameSpaceExists
* @param {object} object - The object you are looking for via namespace
* @returns {boolean} whether the namespace you are looking for exists or not
* @example
* VCUUtils.siteConfig.nameSpaceExists(SiteConfig.plugins.test);
*/
VCUUtils.siteConfig.nameSpaceExists = function (object) {
    if (typeof obj !== 'undefined') {
        return true;
    } else {
        return false;
    }
};

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

VCUUtils.sort.array = VCUUtils.sort.array || {};
VCUUtils.sort.array.viaObjectKey = VCUUtils.sort.array.viaObjectKey || {};

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
