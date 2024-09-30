"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserPermissionsUpdateData = exports.isDomainNotificationUserPermissionsUpdateData = void 0;
var DomainUser_1 = require("../../../user/DomainUser");
var DomainUserPermissions_1 = require("../../../user/DomainUserPermissions");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationUserPermissionsUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        !(0, DomainUserPermissions_1.isDomainUserPermissions)(data['previousPermissions']) ||
        !(0, DomainUserPermissions_1.isDomainUserPermissions)(data['currentPermissions'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserPermissionsUpdateData = isDomainNotificationUserPermissionsUpdateData;
var assertDomainNotificationUserPermissionsUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserPermissionsUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserPermissionsUpdateData = assertDomainNotificationUserPermissionsUpdateData;
