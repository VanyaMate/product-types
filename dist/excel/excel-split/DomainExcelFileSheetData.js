"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainExcelFileSheetData = exports.isDomainExcelFileSheetData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainExcelFileColumns = function (data) {
    return (0, types_kit_1.isArray)(data, types_kit_1.isString);
};
var isDomainExcelFileSheetData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isArray)(data['firstRow'], isDomainExcelFileColumns) ||
        !(0, types_kit_1.isNumber)(data['rowsAmount']));
};
exports.isDomainExcelFileSheetData = isDomainExcelFileSheetData;
var assertDomainExcelFileSheetData = function (data, errorMessage) {
    if (!(0, exports.isDomainExcelFileSheetData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainExcelFileSheetData = assertDomainExcelFileSheetData;
