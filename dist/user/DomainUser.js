"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUser = exports.isDomainUser = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainUser = function (data) {
    return ((0, types_kit_1.isString)(data['id']) &&
        (0, types_kit_1.isString)(data['avatar']) &&
        (0, types_kit_1.isString)(data['login']) &&
        (0, types_kit_1.isBoolean)(data['online']));
};
exports.isDomainUser = isDomainUser;
var assertDomainUser = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUser)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUser = assertDomainUser;
