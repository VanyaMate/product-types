"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCallOffer = exports.isDomainCallOffer = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainCallOffer = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    return true;
};
exports.isDomainCallOffer = isDomainCallOffer;
var assertDomainCallOffer = function (data, variableName, typeName) {
    if (!(0, exports.isDomainCallOffer)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCallOffer = assertDomainCallOffer;
