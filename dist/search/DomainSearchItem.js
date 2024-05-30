"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSearchItem = exports.isDomainSearchItem = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainSearchItem = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['count'] !== 'number' ||
        !Array.isArray(data['list'])) {
        return false;
    }
    return true;
};
exports.isDomainSearchItem = isDomainSearchItem;
var assertDomainSearchItem = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSearchItem)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSearchItem = assertDomainSearchItem;
