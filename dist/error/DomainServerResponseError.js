"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServerResponseError = exports.isDomainServerResponseError = void 0;
var lib_1 = require("../_helpers/lib");
var DomainServerErrorItem_1 = require("./DomainServerErrorItem");
var isDomainServerResponseError = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (!Array.isArray(data['errors']) ||
        !data['errors'].every(function (error) { return (0, DomainServerErrorItem_1.isDomainServerErrorItem)(error); })) {
        return false;
    }
    return true;
};
exports.isDomainServerResponseError = isDomainServerResponseError;
var assertDomainServerResponseError = function (data, variableName, typeName) {
    if (!(0, exports.isDomainServerResponseError)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServerResponseError = assertDomainServerResponseError;
