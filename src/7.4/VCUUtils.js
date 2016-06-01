'use strict';
/*jshint -W097*/

/**
* VCUUtils
* @module
* @author Joel Eisner <eisnerjr@vcu.edu>
* @version 2.0.0
*/
var VCUUtils = (function(utils) {

    /**
    * The version of VCUUtils in use
    * @member version
    * @returns {string} the VCUUtils version
    * @example
    * VCUUtils.version;
    */
    utils.version = '2.1.2_{{date-string}}';

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
