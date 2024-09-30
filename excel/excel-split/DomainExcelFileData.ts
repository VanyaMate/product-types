import {
    TypeGuard,
    TypeAssert,
    isObject,
    isArray, isString,
} from '@vanyamate/types-kit';
import { DomainExcelFileSheetData } from './DomainExcelFileSheetData';
import {
    DomainExcelFileSplitResponse,
    isDomainExcelFileSplitResponse,
} from './DomainExcelFileSplitResponse';


export type DomainExcelFileSheets = Record<string, DomainExcelFileSheetData>;

export type DomainExcelFileData = {
    fileName: string;
    sheets: DomainExcelFileSheets;
    responses: Array<DomainExcelFileSplitResponse>;
}

export const isDomainExcelFileData: TypeGuard<DomainExcelFileData> = function (data): data is DomainExcelFileData {
    return !(
        !isObject(data) ||
        !isObject(data['sheets']) ||
        !isArray(data['responses'], isDomainExcelFileSplitResponse) ||
        !isString(data['fileName'])
    );
};

export const assertDomainExcelFileData: TypeAssert<DomainExcelFileData> = function (data, errorMessage) {
    if (!isDomainExcelFileData(data)) {
        throw errorMessage(data);
    }
};