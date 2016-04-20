'use strict';

var exports = module.exports = {};

exports.randomQuery = (function() {
    function randomString(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    return '?' + randomString(14);
})();

exports.dateString = (function() {
    var D = new Date(),
        m = D.getMonth() + 1,
        d = D.getDate(),
        y = D.getFullYear();
    function padLeft(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    function formatYear(num) {
        return num;
    }
    return padLeft(m) + '.' + padLeft(d) + '.' + formatYear(y);
})();
