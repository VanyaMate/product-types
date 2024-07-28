"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFriendRequest = exports.isDomainFriendRequest = void 0;
var DomainUser_1 = require("../user/DomainUser");
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainFriendRequest = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        typeof data['requestId'] !== 'string' ||
        typeof data['message'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainFriendRequest = isDomainFriendRequest;
var assertDomainFriendRequest = function (data, variableName, typeName) {
    if (!(0, exports.isDomainFriendRequest)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFriendRequest = assertDomainFriendRequest;
