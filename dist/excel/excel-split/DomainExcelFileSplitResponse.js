"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainExcelFileSplitResponse = exports.isDomainExcelFileSplitResponse = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainExcelFileSplitData_1 = require("./DomainExcelFileSplitData");
var isDomainExcelFileSplitResponse = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, DomainExcelFileSplitData_1.isDomainExcelFileSplitData)(data['options']) ||
        !(0, types_kit_1.isString)(data['path']) ||
        !(0, types_kit_1.isString)(data['fileName']) ||
        !(0, types_kit_1.isNumber)(data['fileSize']));
};
exports.isDomainExcelFileSplitResponse = isDomainExcelFileSplitResponse;
var assertDomainExcelFileSplitResponse = function (data, errorMessage) {
    if (!(0, exports.isDomainExcelFileSplitResponse)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainExcelFileSplitResponse = assertDomainExcelFileSplitResponse;
