"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainImage = exports.isDomainImage = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainImage = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['url'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainImage = isDomainImage;
var assertDomainImage = function (data, variableName, typeName) {
    if (!(0, exports.isDomainImage)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainImage = assertDomainImage;
