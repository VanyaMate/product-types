"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotification = exports.isDomainNotification = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainNotification = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['dateMs'] !== 'number' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainNotification = isDomainNotification;
var assertDomainNotification = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotification)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotification = assertDomainNotification;
