"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPostCreateData = exports.isDomainPostCreateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainPostCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainPostCreateData = isDomainPostCreateData;
var assertDomainPostCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPostCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPostCreateData = assertDomainPostCreateData;
