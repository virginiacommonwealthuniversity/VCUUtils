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
* @param {RegExp} rgx - regex statement to match against last parameter
* @param {string} matchStart - start of injector
* @param {string} macthEnd - end of injector
* @param {string} str - the string to parse for the injector
* @returns {string} the string found within the injector
* @example
* VCUUtils.parseInj.genInj(/class:{([^}]+)\}/g, "class:{", "}", string);
*/
VCUUtils.parseInj.genInj = function (rgx, injectorStart, injectorEnd, str) {
    // Try to match the regular expression against the string...
    var matchedStr = str.match(rgx);
    // If there's a match...
    if (null !== matchedStr) {
        // Remove the start and end of the injector...
        var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
        // ... and return what's in between them
        return r;
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
    return VCUUtils.parseInj.genInj(/class:{([^}]+)\}/g, 'class:{', '}', str);
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
    return VCUUtils.parseInj.genInj(/id:{([^}]+)\}/g, 'id:{', '}', str);
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
    return VCUUtils.parseInj.genInj(/style:{([^}]+)\}/g, 'style:{', '}', str);
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
    return VCUUtils.parseInj.genInj(/layout:{([^}]+)\}/g, 'layout:{', '}', str);
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
    return VCUUtils.parseInj.genInj(/before:{([^}]+)\}/g, 'before:{', '}', str);
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
    return VCUUtils.parseInj.genInj(/after:{([^}]+)\}/g, 'after:{', '}', str);
};
