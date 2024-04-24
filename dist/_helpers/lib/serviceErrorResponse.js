"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceErrorResponse = void 0;
var error_1 = require("../../error");
var serviceErrorResponse = function (error, target, code, title) {
    if (target === void 0) { target = ''; }
    if (code === void 0) { code = 0; }
    if (title === void 0) { title = ''; }
    if ((0, error_1.isDomainServiceResponseError)(error)) {
        return error;
    }
    if ((0, error_1.isDomainServiceErrorItem)(error)) {
        return { errors: [error] };
    }
    if ((0, error_1.isDomainSimpleError)(error)) {
        return { errors: [{ target: target, code: code, title: title, messages: [error.message] }] };
    }
    if (typeof error === 'string') {
        return { errors: [{ target: target, code: code, title: title, messages: [error] }] };
    }
    return { errors: [{ target: target, code: code, title: title, messages: ['Unknown error'] }] };
};
exports.serviceErrorResponse = serviceErrorResponse;
