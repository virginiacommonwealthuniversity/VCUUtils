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
