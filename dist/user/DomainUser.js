"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUser = exports.isDomainUser = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainUser = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['avatar']) ||
        !(0, types_kit_1.isString)(data['login'])) {
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
