import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainFile, isDomainFile } from '../../file/DomainFile';
import { isObject } from '../../_helpers/lib/isObject';


export type DomainNotificationFileDeletedData = {
    file: DomainFile;
}

export const isDomainNotificationFileDeletedData: TypeGuard<DomainNotificationFileDeletedData> = function (data: unknown): data is DomainNotificationFileDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (!isDomainFile(data['file'])) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFileDeletedData: TypeAssert<DomainNotificationFileDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFileDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};