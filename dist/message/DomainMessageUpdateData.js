"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMessageUpdateData = exports.isDomainMessageUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainMessageUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string' ||
        typeof data['messageType'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainMessageUpdateData = isDomainMessageUpdateData;
var assertDomainMessageUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainMessageUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainMessageUpdateData = assertDomainMessageUpdateData;
