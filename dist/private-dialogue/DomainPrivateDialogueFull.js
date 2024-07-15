"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainPrivateDialogueFull = exports.isDomainPrivateDialogueFull = void 0;
var DomainUser_1 = require("../user/DomainUser");
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainPrivateDialogue_1 = require("./DomainPrivateDialogue");
var isDomainPrivateDialogueFull = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogue_1.isDomainPrivateDialogue)(data) ||
        typeof data['createdDate'] !== 'string' ||
        typeof data['meArchived'] !== 'boolean' ||
        typeof data['meDeleted'] !== 'boolean' ||
        typeof data['companionArchived'] !== 'boolean' ||
        typeof data['companionDeleted'] !== 'boolean' ||
        !(0, DomainUser_1.isDomainUser)(data['user']) ||
        !Array.isArray(data['messages'])) {
        return false;
    }
    return true;
};
exports.isDomainPrivateDialogueFull = isDomainPrivateDialogueFull;
var assertDomainPrivateDialogueFull = function (data, variableName, typeName) {
    if (!(0, exports.isDomainPrivateDialogueFull)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainPrivateDialogueFull = assertDomainPrivateDialogueFull;
