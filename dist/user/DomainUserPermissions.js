"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserPermissions = exports.isDomainUserPermissions = exports.DomainUserPermissionsGeneralPage = exports.DomainUserPermissionsDialogue = exports.DomainUserPermissionsPrivateDialogue = exports.DomainUserPermissionsFriendRequest = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUserPermissionsFriendRequest;
(function (DomainUserPermissionsFriendRequest) {
    DomainUserPermissionsFriendRequest["ALL"] = "all";
    DomainUserPermissionsFriendRequest["NONE"] = "none";
})(DomainUserPermissionsFriendRequest || (exports.DomainUserPermissionsFriendRequest = DomainUserPermissionsFriendRequest = {}));
var DomainUserPermissionsPrivateDialogue;
(function (DomainUserPermissionsPrivateDialogue) {
    DomainUserPermissionsPrivateDialogue["ALL"] = "all";
    DomainUserPermissionsPrivateDialogue["FRIENDS"] = "friends";
    DomainUserPermissionsPrivateDialogue["NONE"] = "none";
})(DomainUserPermissionsPrivateDialogue || (exports.DomainUserPermissionsPrivateDialogue = DomainUserPermissionsPrivateDialogue = {}));
var DomainUserPermissionsDialogue;
(function (DomainUserPermissionsDialogue) {
    DomainUserPermissionsDialogue["ALL"] = "all";
    DomainUserPermissionsDialogue["FRIENDS"] = "friends";
    DomainUserPermissionsDialogue["NONE"] = "none";
})(DomainUserPermissionsDialogue || (exports.DomainUserPermissionsDialogue = DomainUserPermissionsDialogue = {}));
var DomainUserPermissionsGeneralPage;
(function (DomainUserPermissionsGeneralPage) {
    DomainUserPermissionsGeneralPage["ALL"] = "all";
    DomainUserPermissionsGeneralPage["FRIENDS"] = "friends";
    DomainUserPermissionsGeneralPage["NONE"] = "none";
})(DomainUserPermissionsGeneralPage || (exports.DomainUserPermissionsGeneralPage = DomainUserPermissionsGeneralPage = {}));
var isDomainUserPermissions = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['friendRequest'] !== 'string' ||
        typeof data['privateDialogue'] !== 'string' ||
        typeof data['dialogue'] !== 'string' ||
        typeof data['generalPage'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainUserPermissions = isDomainUserPermissions;
var assertDomainUserPermissions = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserPermissions)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserPermissions = assertDomainUserPermissions;
