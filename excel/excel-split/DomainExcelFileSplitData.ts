import {
    TypeGuard,
    TypeAssert,
    isObject,
    isArray,
    isString,
    isNumber,
    isBoolean,
} from '@vanyamate/types-kit';


export type DomainExcelFileSplitData = {
    selectedSheet: string;
    selectedColumns: Array<number>;
    convertToTextFile: boolean;
    rowsPerFile: number;
    saveFirstRow: boolean;
}

export const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData> = function (data): data is DomainExcelFileSplitData {
    return !(
        !isObject(data) ||
        !isString(data['selectedSheet']) ||
        !isArray(data['selectedColumns'], isNumber) ||
        !isNumber(data['rowsPerFile']) ||
        !isBoolean(data['convertToTextFile']) ||
        !isBoolean(data['saveFirstRow'])
    );
};

export const assertDomainExcelFileSplitData: TypeAssert<DomainExcelFileSplitData> = function (data, errorMessage) {
    if (!isDomainExcelFileSplitData(data)) {
        throw errorMessage(data);
    }
};