"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainExcelFileSplitData = exports.isDomainExcelFileSplitData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainExcelFileSplitData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['selectedSheet']) ||
        !(0, types_kit_1.isArray)(data['selectedColumns'], types_kit_1.isNumber) ||
        !(0, types_kit_1.isNumber)(data['rowsPerFile']) ||
        !(0, types_kit_1.isBoolean)(data['convertToTextFile']) ||
        !(0, types_kit_1.isBoolean)(data['saveFirstRow']));
};
exports.isDomainExcelFileSplitData = isDomainExcelFileSplitData;
var assertDomainExcelFileSplitData = function (data, errorMessage) {
    if (!(0, exports.isDomainExcelFileSplitData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainExcelFileSplitData = assertDomainExcelFileSplitData;
