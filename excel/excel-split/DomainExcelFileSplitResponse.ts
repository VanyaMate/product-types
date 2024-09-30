import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainExcelFileSplitData,
    isDomainExcelFileSplitData,
} from './DomainExcelFileSplitData';


export type DomainExcelFileSplitResponse = {
    options: DomainExcelFileSplitData;
    path: string;
}

export const isDomainExcelFileSplitResponse: TypeGuard<DomainExcelFileSplitResponse> = function (data): data is DomainExcelFileSplitResponse {
    return !(
        !isObject(data) ||
        !isDomainExcelFileSplitData(data['options']) ||
        !isString(data['path'])
    );
};

export const assertDomainExcelFileSplitResponse: TypeAssert<DomainExcelFileSplitResponse> = function (data, errorMessage) {
    if (!isDomainExcelFileSplitResponse(data)) {
        throw errorMessage(data);
    }
};