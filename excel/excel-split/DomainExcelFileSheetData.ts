import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray, isNumber,
} from '@vanyamate/types-kit';


export type DomainExcelFileColumn = [ string, string ];

export type DomainExcelFileSheetData = {
    firstRow: Array<DomainExcelFileColumn>,
    rowsAmount: number;
}

const LENGTH_OF_COLUMN_DATA = 2;

const isDomainExcelFileColumn: TypeGuard<DomainExcelFileColumn> = function (data): data is DomainExcelFileColumn {
    return isArray(data, (value: unknown): value is string => isString(value)) && data.length === LENGTH_OF_COLUMN_DATA;
};

export const isDomainExcelFileSheetData: TypeGuard<DomainExcelFileSheetData> = function (data): data is DomainExcelFileSheetData {
    return !(
        !isObject(data) ||
        !isArray(data['firstRow'], isDomainExcelFileColumn) ||
        !isNumber(data['rowsAmount'])
    );
};

export const assertDomainExcelFileSheetData: TypeAssert<DomainExcelFileSheetData> = function (data, errorMessage) {
    if (!isDomainExcelFileSheetData(data)) {
        throw errorMessage(data);
    }
};