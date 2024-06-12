"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainDialogue = exports.isDomainDialogue = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainDialogue = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        !Array.isArray(data['users']) ||
        !Array.isArray(data['messages'])) {
        return false;
    }
    return true;
};
exports.isDomainDialogue = isDomainDialogue;
var assertDomainDialogue = function (data, variableName, typeName) {
    if (!(0, exports.isDomainDialogue)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainDialogue = assertDomainDialogue;
