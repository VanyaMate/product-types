"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPrivateDialogueWithUser = exports.isDomainPrivateDialogueWithUser = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../user/DomainUser");
var isDomainPrivateDialogueWithUser = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainPrivateDialogueWithUser = isDomainPrivateDialogueWithUser;
var assertDomainPrivateDialogueWithUser = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPrivateDialogueWithUser)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPrivateDialogueWithUser = assertDomainPrivateDialogueWithUser;
