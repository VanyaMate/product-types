import {
    TypeGuard,
    TypeAssert,
    isObject,
    isArray, isString, isNumber, isBoolean,
} from '@vanyamate/types-kit';


export type DomainExcelFileSplitColumnSelect = [ string, boolean ];

export type DomainExcelFileSplitData = {
    selectedColumns: Array<DomainExcelFileSplitColumnSelect>;
    convertToTextFile: boolean;
    rowsPerFile: number;
    saveFirstRow: boolean;
}

const isDomainExcelFileSplitColumnSelect: TypeGuard<DomainExcelFileSplitColumnSelect> = function (data): data is DomainExcelFileSplitColumnSelect {
    return isArray(data, isString);
};

export const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData> = function (data): data is DomainExcelFileSplitData {
    return !(
        !isObject(data) ||
        !isArray(data['selectedColumns'], isDomainExcelFileSplitColumnSelect) ||
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