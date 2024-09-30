"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFriends = exports.isDomainFriends = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainFriends = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!Array.isArray(data['friends']) ||
        !Array.isArray(data['requestsOut']) ||
        !Array.isArray(data['requestsIn'])) {
        return false;
    }
    return true;
};
exports.isDomainFriends = isDomainFriends;
var assertDomainFriends = function (data, variableName, typeName) {
    if (!(0, exports.isDomainFriends)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFriends = assertDomainFriends;
