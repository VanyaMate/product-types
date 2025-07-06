"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostCommentUpdateData = exports.isDomainNotificationPostCommentUpdateData = void 0;
var DomainComment_1 = require("../../../comment/DomainComment");
var DomainPost_1 = require("../../../post/DomainPost");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var isDomainNotificationPostCommentUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if ((0, DomainPost_1.isDomainPost)(data['post']) &&
        (0, DomainComment_1.isDomainComment)(data['comment'])) {
        return true;
    }
    return false;
};
exports.isDomainNotificationPostCommentUpdateData = isDomainNotificationPostCommentUpdateData;
var assertDomainNotificationPostCommentUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostCommentUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostCommentUpdateData = assertDomainNotificationPostCommentUpdateData;
