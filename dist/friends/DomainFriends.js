"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFriends = exports.isDomainFriends = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var types_kit_1 = require("@vanyamate/types-kit");
var DomainFriendRequest_1 = require("./DomainFriendRequest");
var DomainUser_1 = require("../user/DomainUser");
var isDomainFriends = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isArray)(data['friends'], DomainUser_1.isDomainUser) &&
        (0, types_kit_1.isArray)(data['requestsOut'], DomainFriendRequest_1.isDomainFriendRequest) &&
        (0, types_kit_1.isArray)(data['requestsIn'], DomainFriendRequest_1.isDomainFriendRequest));
};
exports.isDomainFriends = isDomainFriends;
var assertDomainFriends = function (data, variableName, typeName) {
    if (!(0, exports.isDomainFriends)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFriends = assertDomainFriends;
