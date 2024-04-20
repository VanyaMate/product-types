"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServiceResponseError = exports.isDomainServiceResponseError = void 0;
var lib_1 = require("../_helpers/lib");
var DomainServiceErrorItem_1 = require("./DomainServiceErrorItem");
var isDomainServiceResponseError = function (data) {
    if (typeof data !== 'object') {
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
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServiceResponseError = assertDomainServiceResponseError;
