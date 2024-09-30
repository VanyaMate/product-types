"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMessageCreateData = exports.isDomainMessageCreateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainMessageCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string' ||
        typeof data['messageType'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainMessageCreateData = isDomainMessageCreateData;
var assertDomainMessageCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainMessageCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainMessageCreateData = assertDomainMessageCreateData;
