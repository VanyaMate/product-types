"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFile = exports.isDomainFile = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../user/DomainUser");
var isDomainFile = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['fileName'] !== 'string' ||
        typeof data['filePath'] !== 'string' ||
        typeof data['fileType'] !== 'string' ||
        typeof data['fileOriginalName'] !== 'string' ||
        typeof data['fileWeight'] !== 'number' ||
        typeof data['uploadDate'] !== 'string' ||
        typeof data['private'] !== 'boolean' ||
        !(0, DomainUser_1.isDomainUser)(data['owner'])) {
        return false;
    }
    return true;
};
exports.isDomainFile = isDomainFile;
var assertDomainFile = function (data, variableName, typeName) {
    if (!(0, exports.isDomainFile)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFile = assertDomainFile;
