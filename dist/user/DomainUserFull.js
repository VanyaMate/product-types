"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserFull = exports.isDomainUserFull = void 0;
var DomainUser_1 = require("./DomainUser");
var DomainUserNameInfo_1 = require("./DomainUserNameInfo");
var DomainUserContactsInfo_1 = require("./DomainUserContactsInfo");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var DomainUserPermissions_1 = require("./DomainUserPermissions");
var isDomainUserFull = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['background'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data) ||
        !(0, DomainUserNameInfo_1.isDomainUserNameInfo)(data['nameInfo']) ||
        !(0, DomainUserContactsInfo_1.isDomainUserContactsInfo)(data['contacts']) ||
        !(0, DomainUserPermissions_1.isDomainUserPermissions)(data['permissions'])) {
        return false;
    }
    return true;
};
exports.isDomainUserFull = isDomainUserFull;
var assertDomainUserFull = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserFull)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserFull = assertDomainUserFull;
