import {
    TypeGuard,
    TypeAssert,
    isObject,
    isArray,
    isString,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainExcelFileSplitData = {
    selectedSheet: string;
    selectedColumns: Array<string>;
    rowsPerFile: number;
}

export const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData> = function (data): data is DomainExcelFileSplitData {
    return !(
        !isObject(data) ||
        !isString(data['selectedSheet']) ||
        !isArray(data['selectedColumns'], isString) ||
        !isNumber(data['rowsPerFile'])
    );
};

export const assertDomainExcelFileSplitData: TypeAssert<DomainExcelFileSplitData> = function (data, errorMessage) {
    if (!isDomainExcelFileSplitData(data)) {
        throw errorMessage(data);
    }
};