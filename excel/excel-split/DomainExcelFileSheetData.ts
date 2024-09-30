import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
    isArray,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainExcelFileColumns = Array<string>;

export type DomainExcelFileSheetData = {
    firstRow: DomainExcelFileColumns,
    rowsAmount: number;
}

const isDomainExcelFileColumns: TypeGuard<DomainExcelFileColumns> = function (data): data is DomainExcelFileColumns {
    return isArray(data, isString);
};

export const isDomainExcelFileSheetData: TypeGuard<DomainExcelFileSheetData> = function (data): data is DomainExcelFileSheetData {
    return !(
        !isObject(data) ||
        !isArray(data['firstRow'], isDomainExcelFileColumns) ||
        !isNumber(data['rowsAmount'])
    );
};

export const assertDomainExcelFileSheetData: TypeAssert<DomainExcelFileSheetData> = function (data, errorMessage) {
    if (!isDomainExcelFileSheetData(data)) {
        throw errorMessage(data);
    }
};