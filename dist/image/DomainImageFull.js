"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainImageFull = exports.isDomainImageFull = void 0;
var lib_1 = require("../_helpers/lib");
var DomainImage_1 = require("./DomainImage");
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
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainImageFull = assertDomainImageFull;
