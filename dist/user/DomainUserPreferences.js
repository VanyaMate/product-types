"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserPreferences = exports.isDomainUserPreferences = exports.DomainUserPreferencesGeneralPage = exports.DomainUserPreferencesDialogue = exports.DomainUserPreferencesPrivateDialogue = exports.DomainUserPreferencesFriendRequest = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUserPreferencesFriendRequest;
(function (DomainUserPreferencesFriendRequest) {
    DomainUserPreferencesFriendRequest["ALL"] = "all";
    DomainUserPreferencesFriendRequest["NONE"] = "none";
})(DomainUserPreferencesFriendRequest || (exports.DomainUserPreferencesFriendRequest = DomainUserPreferencesFriendRequest = {}));
var DomainUserPreferencesPrivateDialogue;
(function (DomainUserPreferencesPrivateDialogue) {
    DomainUserPreferencesPrivateDialogue["ALL"] = "all";
    DomainUserPreferencesPrivateDialogue["FRIENDS"] = "friends";
    DomainUserPreferencesPrivateDialogue["NONE"] = "none";
})(DomainUserPreferencesPrivateDialogue || (exports.DomainUserPreferencesPrivateDialogue = DomainUserPreferencesPrivateDialogue = {}));
var DomainUserPreferencesDialogue;
(function (DomainUserPreferencesDialogue) {
    DomainUserPreferencesDialogue["ALL"] = "all";
    DomainUserPreferencesDialogue["FRIENDS"] = "friends";
    DomainUserPreferencesDialogue["NONE"] = "none";
})(DomainUserPreferencesDialogue || (exports.DomainUserPreferencesDialogue = DomainUserPreferencesDialogue = {}));
var DomainUserPreferencesGeneralPage;
(function (DomainUserPreferencesGeneralPage) {
    DomainUserPreferencesGeneralPage["ALL"] = "all";
    DomainUserPreferencesGeneralPage["FRIENDS"] = "friends";
    DomainUserPreferencesGeneralPage["NONE"] = "none";
})(DomainUserPreferencesGeneralPage || (exports.DomainUserPreferencesGeneralPage = DomainUserPreferencesGeneralPage = {}));
var isDomainUserPreferences = function (data) {
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
exports.isDomainUserPreferences = isDomainUserPreferences;
var assertDomainUserPreferences = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserPreferences)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserPreferences = assertDomainUserPreferences;
