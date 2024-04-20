"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainServerErrorItem = exports.isDomainServerErrorItem = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainServerErrorItem = function (data) {
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
exports.isDomainServerErrorItem = isDomainServerErrorItem;
var assertDomainServerErrorItem = function (data, variableName, typeName) {
    if (!(0, exports.isDomainServerErrorItem)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainServerErrorItem = assertDomainServerErrorItem;
