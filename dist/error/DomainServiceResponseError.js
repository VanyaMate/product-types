"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServiceResponseError = exports.isDomainServiceResponseError = void 0;
var DomainServiceErrorItem_1 = require("./DomainServiceErrorItem");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainServiceResponseError = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!Array.isArray(data['errors']) ||
        !data['errors'].every(function (error) { return (0, DomainServiceErrorItem_1.isDomainServiceErrorItem)(error); })) {
        return false;
    }
    return true;
};
exports.isDomainServiceResponseError = isDomainServiceResponseError;
var assertDomainServiceResponseError = function (data, variableName, typeName) {
    if (!(0, exports.isDomainServiceResponseError)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServiceResponseError = assertDomainServiceResponseError;
