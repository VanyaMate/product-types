"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainDialog = exports.isDomainDialog = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainDialog = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        !Array.isArray(data['users']) ||
        !Array.isArray(data['messages'])) {
        return false;
    }
    return true;
};
exports.isDomainDialog = isDomainDialog;
var assertDomainDialog = function (data, variableName, typeName) {
    if (!(0, exports.isDomainDialog)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainDialog = assertDomainDialog;
