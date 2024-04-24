"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUser = exports.isDomainUser = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainUser = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        typeof data['login'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainUser = isDomainUser;
var assertDomainUser = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUser)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUser = assertDomainUser;
