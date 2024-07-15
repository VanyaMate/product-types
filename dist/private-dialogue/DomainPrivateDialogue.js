"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPrivateDialogue = exports.isDomainPrivateDialogue = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainPrivateDialogue = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainPrivateDialogue = isDomainPrivateDialogue;
var assertDomainPrivateDialogue = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPrivateDialogue)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPrivateDialogue = assertDomainPrivateDialogue;
