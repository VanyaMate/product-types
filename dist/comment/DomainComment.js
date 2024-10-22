"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainComment = exports.isDomainComment = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainUser_1 = require("../user/DomainUser");
var isDomainComment = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['comment']) ||
        !(0, DomainUser_1.isDomainUser)(data['author']) ||
        !(0, types_kit_1.isNumber)(data['creationDate']) ||
        !(0, types_kit_1.isBoolean)(data['redacted']));
};
exports.isDomainComment = isDomainComment;
var assertDomainComment = function (data, errorMessage) {
    if (!(0, exports.isDomainComment)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainComment = assertDomainComment;
