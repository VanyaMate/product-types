"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMessage = exports.isDomainMessage = exports.DomainMessageType = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../user/DomainUser");
var DomainMessageType;
(function (DomainMessageType) {
    DomainMessageType["TEXT"] = "text";
    DomainMessageType["IMAGE"] = "image";
    DomainMessageType["LINK"] = "link";
})(DomainMessageType || (exports.DomainMessageType = DomainMessageType = {}));
var isDomainMessage = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['dialogueId'] !== 'string' ||
        typeof data['message'] !== 'string' ||
        typeof data['redacted'] !== 'boolean' ||
        typeof data['creationDate'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['author'])) {
        return false;
    }
    return true;
};
exports.isDomainMessage = isDomainMessage;
var assertDomainMessage = function (data, variableName, typeName) {
    if (!(0, exports.isDomainMessage)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainMessage = assertDomainMessage;
