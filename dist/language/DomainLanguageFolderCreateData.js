"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageFolderCreateData = exports.isDomainLanguageFolderCreateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguageFolderCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['title'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainLanguageFolderCreateData = isDomainLanguageFolderCreateData;
var assertDomainLanguageFolderCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageFolderCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageFolderCreateData = assertDomainLanguageFolderCreateData;
