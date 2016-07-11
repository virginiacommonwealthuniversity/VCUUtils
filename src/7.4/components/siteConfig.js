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
