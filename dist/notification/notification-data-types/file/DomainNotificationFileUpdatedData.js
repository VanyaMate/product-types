"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationFileUpdatedData = exports.isDomainNotificationFileUpdatedData = void 0;
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainFile_1 = require("../../../file/DomainFile");
var isObject_1 = require("../../../_helpers/lib/isObject");
var isDomainNotificationFileUpdatedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainFile_1.isDomainFile)(data['previousFile']) ||
        !(0, DomainFile_1.isDomainFile)(data['newFile'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationFileUpdatedData = isDomainNotificationFileUpdatedData;
var assertDomainNotificationFileUpdatedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationFileUpdatedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationFileUpdatedData = assertDomainNotificationFileUpdatedData;
