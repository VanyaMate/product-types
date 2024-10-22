"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPostUpdateData = exports.isDomainPostUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainPostUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, types_kit_1.isString)(data['message'])) {
        return false;
    }
    return true;
};
exports.isDomainPostUpdateData = isDomainPostUpdateData;
var assertDomainPostUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPostUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPostUpdateData = assertDomainPostUpdateData;
