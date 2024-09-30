import {
    TypeGuard,
    TypeAssert,
    isObject,
    isNumber,
    isArray,
} from '@vanyamate/types-kit';


export type DomainExcelFileColumn = [ string, string ];

export type DomainExcelFileData = {
    firstRow: Array<DomainExcelFileColumn>;
    rowsAmount: number;
}

export const isDomainExcelFileData: TypeGuard<DomainExcelFileData> = function (data): data is DomainExcelFileData {
    return !(
        !isObject(data) ||
        !isNumber(data['rowsAmount']) ||
        !isArray(data['firstRow'], isObject)
    );
};

export const assertDomainExcelFileData: TypeAssert<DomainExcelFileData> = function (data, errorMessage) {
    if (!isDomainExcelFileData(data)) {
        throw errorMessage(data);
    }
};