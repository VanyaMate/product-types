"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServiceErrorItem = exports.isDomainServiceErrorItem = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainServiceErrorItem = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['code'] !== 'number' ||
        typeof data['target'] !== 'string' ||
        !Array.isArray(data['messages']) // Notice: Не проверяется то, что все сообщения являются строками.
    ) {
        return false;
    }
    return true;
};
exports.isDomainServiceErrorItem = isDomainServiceErrorItem;
var assertDomainServiceErrorItem = function (data, variableName, typeName) {
    if (!(0, exports.isDomainServiceErrorItem)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServiceErrorItem = assertDomainServiceErrorItem;
