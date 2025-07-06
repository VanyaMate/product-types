"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostCommentReplyCreateData = exports.isDomainNotificationPostCommentReplyCreateData = void 0;
var DomainComment_1 = require("../../../comment/DomainComment");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var isDomainNotificationPostCommentReplyCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if ((0, DomainComment_1.isDomainComment)(data['reply']) &&
        (0, DomainComment_1.isDomainComment)(data['comment'])) {
        return true;
    }
    return false;
};
exports.isDomainNotificationPostCommentReplyCreateData = isDomainNotificationPostCommentReplyCreateData;
var assertDomainNotificationPostCommentReplyCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostCommentReplyCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostCommentReplyCreateData = assertDomainNotificationPostCommentReplyCreateData;
