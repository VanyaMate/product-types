"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSimpleError = exports.isDomainSimpleError = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainSimpleError = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['message'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainSimpleError = isDomainSimpleError;
var assertDomainSimpleError = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSimpleError)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSimpleError = assertDomainSimpleError;
