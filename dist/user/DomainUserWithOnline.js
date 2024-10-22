"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserWithOnline = exports.isDomainUserWithOnline = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainUser_1 = require("./DomainUser");
var isDomainUserWithOnline = function (data) {
    return ((0, DomainUser_1.isDomainUser)(data) &&
        (0, types_kit_1.isBoolean)(data['online']));
};
exports.isDomainUserWithOnline = isDomainUserWithOnline;
var assertDomainUserWithOnline = function (data, errorMessage) {
    if (!(0, exports.isDomainUserWithOnline)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainUserWithOnline = assertDomainUserWithOnline;
