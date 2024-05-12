"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainImageFull = exports.isDomainImageFull = void 0;
var DomainImage_1 = require("./DomainImage");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainImageFull = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['description'] !== 'string' ||
        !(0, DomainImage_1.isDomainImage)(data)) {
        return false;
    }
    return true;
};
exports.isDomainImageFull = isDomainImageFull;
var assertDomainImageFull = function (data, variableName, typeName) {
    if (!(0, exports.isDomainImageFull)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainImageFull = assertDomainImageFull;
