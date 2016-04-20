/**
* parseInj
* @namespace parseInj
* @extends VCUUtils
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 1.0.0
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of class:{...}
    return parseInj(/class:{([^}]+)\}/g, 'class:{', '}', str);
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of id:{...}
    return parseInj(/id:{([^}]+)\}/g, 'id:{', '}', str);
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of style:{...}
    return parseInj(/style:{([^}]+)\}/g, 'style:{', '}', str);
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of layout:{...}
    return parseInj(/layout:{([^}]+)\}/g, 'layout:{', '}', str);
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of before:{...}
    return parseInj(/before:{([^}]+)\}/g, 'before:{', '}', str);
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
    // VCUUtils.parseInj.genInj
    function parseInj (rgx, injectorStart, injectorEnd, str) {
        var matchedStr = str.match(rgx);
        if (null !== matchedStr) {
            var r = matchedStr[0].replace(injectorStart, '').replace(injectorEnd, '');
            return r;
        }
    }
    // Return of after:{...}
    return parseInj(/after:{([^}]+)\}/g, 'after:{', '}', str);
};
