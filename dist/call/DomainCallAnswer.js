"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCallAnswer = exports.isDomainCallAnswer = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isOptional_1 = require("../_helpers/lib/isOptional");
var isDomainCallAnswer = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, isOptional_1.isOptional)(data['sdp'], 'string') ||
        !(0, isOptional_1.isOptional)(data['type'], 'string')) {
        return false;
    }
    return true;
};
exports.isDomainCallAnswer = isDomainCallAnswer;
var assertDomainCallAnswer = function (data, variableName, typeName) {
    if (!(0, exports.isDomainCallAnswer)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCallAnswer = assertDomainCallAnswer;
