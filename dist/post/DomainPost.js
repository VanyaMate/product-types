"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPost = exports.isDomainPost = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../user/DomainUser");
var types_kit_1 = require("@vanyamate/types-kit");
var DomainComment_1 = require("../comment/DomainComment");
var isDomainPost = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['message']) ||
        !(0, types_kit_1.isBoolean)(data['redacted']) ||
        !(0, types_kit_1.isNumber)(data['creationData']) ||
        !(0, DomainUser_1.isDomainUser)(data['author']) ||
        !(0, types_kit_1.isBoolean)(data['liked']) ||
        !(0, types_kit_1.isNumber)(data['likes']) ||
        !(0, types_kit_1.isNumber)(data['replies']) ||
        !(0, types_kit_1.isNumber)(data['forwards']) ||
        !(0, types_kit_1.isArray)(data['comments'], DomainComment_1.isDomainComment)) {
        return false;
    }
    return true;
};
exports.isDomainPost = isDomainPost;
var assertDomainPost = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPost)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPost = assertDomainPost;
