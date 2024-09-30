"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainExcelFileSheetData = exports.isDomainExcelFileSheetData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var LENGTH_OF_COLUMN_DATA = 2;
var isDomainExcelFileColumn = function (data) {
    return (0, types_kit_1.isArray)(data, function (value) { return (0, types_kit_1.isString)(value); }) && data.length === LENGTH_OF_COLUMN_DATA;
};
var isDomainExcelFileSheetData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isArray)(data['firstRow'], isDomainExcelFileColumn) ||
        !(0, types_kit_1.isNumber)(data['rowsAmount']));
};
exports.isDomainExcelFileSheetData = isDomainExcelFileSheetData;
var assertDomainExcelFileSheetData = function (data, errorMessage) {
    if (!(0, exports.isDomainExcelFileSheetData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainExcelFileSheetData = assertDomainExcelFileSheetData;
