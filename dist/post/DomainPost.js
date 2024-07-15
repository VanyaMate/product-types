"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPost = exports.isDomainPost = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../user/DomainUser");
var isDomainPost = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['message'] !== 'string' ||
        typeof data['redacted'] !== 'boolean' ||
        typeof data['creationData'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['author'])) {
        return false;
    }
    return true;
};
exports.isDomainPost = isDomainPost;
var assertDomainPost = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPost)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPost = assertDomainPost;
