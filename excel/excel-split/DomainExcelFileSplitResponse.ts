import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainExcelFileSplitData,
    isDomainExcelFileSplitData,
} from './DomainExcelFileSplitData';


export type DomainExcelFileSplitResponse = {
    fileName: string;
    fileSize: number;
    options: DomainExcelFileSplitData;
    path: string;
}

export const isDomainExcelFileSplitResponse: TypeGuard<DomainExcelFileSplitResponse> = function (data): data is DomainExcelFileSplitResponse {
    return !(
        !isObject(data) ||
        !isDomainExcelFileSplitData(data['options']) ||
        !isString(data['path']) ||
        !isString(data['fileName']) ||
        !isNumber(data['fileSize'])
    );
};

export const assertDomainExcelFileSplitResponse: TypeAssert<DomainExcelFileSplitResponse> = function (data, errorMessage) {
    if (!isDomainExcelFileSplitResponse(data)) {
        throw errorMessage(data);
    }
};