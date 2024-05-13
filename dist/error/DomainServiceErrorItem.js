"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServiceErrorItem = exports.isDomainServiceErrorItem = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainServiceErrorItem = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['code'] !== 'number' ||
        typeof data['target'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        !Array.isArray(data['messages']) // Notice: Не проверяется то, что все сообщения являются строками.
    ) {
        return false;
    }
    return true;
};
exports.isDomainServiceErrorItem = isDomainServiceErrorItem;
var assertDomainServiceErrorItem = function (data, variableName, typeName) {
    if (!(0, exports.isDomainServiceErrorItem)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServiceErrorItem = assertDomainServiceErrorItem;
