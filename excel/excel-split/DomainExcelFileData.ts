import {
    TypeGuard,
    TypeAssert,
    isObject,
    isNumber,
    isArray,
} from '@vanyamate/types-kit';
import { DomainExcelFileSheetData } from './DomainExcelFileSheetData';


export type DomainExcelFileSheets = Record<string, DomainExcelFileSheetData>;

export type DomainExcelFileData = {
    sheets: DomainExcelFileSheets;
}

export const isDomainExcelFileData: TypeGuard<DomainExcelFileData> = function (data): data is DomainExcelFileData {
    return !(
        !isObject(data) ||
        !isObject(data['sheets'])
    );
};

export const assertDomainExcelFileData: TypeAssert<DomainExcelFileData> = function (data, errorMessage) {
    if (!isDomainExcelFileData(data)) {
        throw errorMessage(data);
    }
};