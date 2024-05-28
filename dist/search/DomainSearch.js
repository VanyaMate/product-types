"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSearch = exports.isDomainSearch = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainSearchItem_1 = require("./DomainSearchItem");
var isDomainSearch = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['profiles'] !== undefined && !(0, DomainSearchItem_1.isDomainSearchItem)(data['profiles'])) {
        return false;
    }
    return true;
};
exports.isDomainSearch = isDomainSearch;
var assertDomainSearch = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSearch)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSearch = assertDomainSearch;
