import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainFile, isDomainFile } from '../../../file/DomainFile';
import { isObject } from '../../../_helpers/lib/isObject';


export type DomainNotificationFileUploadedData = {
    file: DomainFile;
}

export const isDomainNotificationFileUploadedData: TypeGuard<DomainNotificationFileUploadedData> = function (data: unknown): data is DomainNotificationFileUploadedData {
    if (!isObject(data)) {
        return false;
    }

    if (!isDomainFile(data['file'])) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFileUploadedData: TypeAssert<DomainNotificationFileUploadedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFileUploadedData(data)) {
        throwAssertError(variableName, typeName);
    }
};