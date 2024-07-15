"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserWithPermissions = exports.isDomainUserWithPermissions = void 0;
var DomainUser_1 = require("./DomainUser");
var DomainUserPermissions_1 = require("./DomainUserPermissions");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainUserWithPermissions = function (data) {
    if (!(0, DomainUser_1.isDomainUser)(data) ||
        !(0, DomainUserPermissions_1.isDomainUserPermissions)(data['permissions'])) {
        return false;
    }
    return true;
};
exports.isDomainUserWithPermissions = isDomainUserWithPermissions;
var assertDomainUserWithPermissions = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserWithPermissions)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserWithPermissions = assertDomainUserWithPermissions;
