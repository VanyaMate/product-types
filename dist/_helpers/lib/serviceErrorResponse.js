"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceErrorResponse = void 0;
var error_1 = require("../../error");
var serviceErrorResponse = function (error, target, code) {
    if (target === void 0) { target = ''; }
    if (code === void 0) { code = 0; }
    if ((0, error_1.isDomainServiceErrorItem)(error)) {
        return { errors: [error] };
    }
    if ((0, error_1.isDomainSimpleError)(error)) {
        return { errors: [{ target: target, code: code, messages: [error.message] }] };
    }
    if (typeof error === 'string') {
        return { errors: [{ target: target, code: code, messages: [error] }] };
    }
    return { errors: [{ target: target, code: code, messages: ['Unknown error'] }] };
};
exports.serviceErrorResponse = serviceErrorResponse;
