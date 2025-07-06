"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostCommentLikedData = exports.isDomainNotificationPostCommentLikedData = void 0;
var DomainComment_1 = require("../../../comment/DomainComment");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationPostCommentLikedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if ((0, DomainUser_1.isDomainUser)(data['user']) &&
        (0, DomainComment_1.isDomainComment)(data['comment'])) {
        return true;
    }
    return false;
};
exports.isDomainNotificationPostCommentLikedData = isDomainNotificationPostCommentLikedData;
var assertDomainNotificationPostCommentLikedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostCommentLikedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostCommentLikedData = assertDomainNotificationPostCommentLikedData;
