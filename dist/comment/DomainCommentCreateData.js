"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCommentCreateData = exports.isDomainCommentCreateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainCommentCreateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['comment']) &&
        (0, types_kit_1.isOptional)(data['replyId'], types_kit_1.isString));
};
exports.isDomainCommentCreateData = isDomainCommentCreateData;
var assertDomainCommentCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainCommentCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCommentCreateData = assertDomainCommentCreateData;
