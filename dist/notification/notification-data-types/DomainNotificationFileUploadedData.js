"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationFileUploadedData = exports.isDomainNotificationFileUploadedData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainFile_1 = require("../../file/DomainFile");
var isObject_1 = require("../../_helpers/lib/isObject");
var isDomainNotificationFileUploadedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainFile_1.isDomainFile)(data['file'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationFileUploadedData = isDomainNotificationFileUploadedData;
var assertDomainNotificationFileUploadedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationFileUploadedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationFileUploadedData = assertDomainNotificationFileUploadedData;
