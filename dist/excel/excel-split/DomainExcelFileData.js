"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainExcelFileData = exports.isDomainExcelFileData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainExcelFileSplitResponse_1 = require("./DomainExcelFileSplitResponse");
var isDomainExcelFileData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isObject)(data['sheets']) ||
        !(0, types_kit_1.isArray)(data['responses'], DomainExcelFileSplitResponse_1.isDomainExcelFileSplitResponse));
};
exports.isDomainExcelFileData = isDomainExcelFileData;
var assertDomainExcelFileData = function (data, errorMessage) {
    if (!(0, exports.isDomainExcelFileData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainExcelFileData = assertDomainExcelFileData;
