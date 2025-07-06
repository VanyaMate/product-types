"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostCommentReplyDeleteData = exports.isDomainNotificationPostCommentReplyDeleteData = void 0;
var DomainComment_1 = require("../../../comment/DomainComment");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var isDomainNotificationPostCommentReplyDeleteData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if ((0, DomainComment_1.isDomainComment)(data['reply']) &&
        (0, DomainComment_1.isDomainComment)(data['comment'])) {
        return true;
    }
    return false;
};
exports.isDomainNotificationPostCommentReplyDeleteData = isDomainNotificationPostCommentReplyDeleteData;
var assertDomainNotificationPostCommentReplyDeleteData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostCommentReplyDeleteData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostCommentReplyDeleteData = assertDomainNotificationPostCommentReplyDeleteData;
