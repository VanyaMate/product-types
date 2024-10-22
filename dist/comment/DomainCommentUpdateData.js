"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCommentUpdateData = exports.isDomainCommentUpdateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainCommentUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['comment']));
};
exports.isDomainCommentUpdateData = isDomainCommentUpdateData;
var assertDomainCommentUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainCommentUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCommentUpdateData = assertDomainCommentUpdateData;
