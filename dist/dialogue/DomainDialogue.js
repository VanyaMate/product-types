"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainDialogue = exports.isDomainDialogue = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainMessage_1 = require("../message/DomainMessage");
var types_kit_1 = require("@vanyamate/types-kit");
var DomainUser_1 = require("../user/DomainUser");
var isDomainDialogue = function (data) {
    return ((0, isObject_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, types_kit_1.isString)(data['title']) &&
        (0, types_kit_1.isString)(data['avatar']) &&
        (0, types_kit_1.isArray)(data['users'], DomainUser_1.isDomainUser) &&
        (0, types_kit_1.isArray)(data['messages'], DomainMessage_1.isDomainMessage));
};
exports.isDomainDialogue = isDomainDialogue;
var assertDomainDialogue = function (data, variableName, typeName) {
    if (!(0, exports.isDomainDialogue)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainDialogue = assertDomainDialogue;
