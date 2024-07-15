import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainFile, isDomainFile } from '../../file/DomainFile';
import { isObject } from '../../_helpers/lib/isObject';


export type DomainNotificationFileUpdatedData = {
    previousFile: DomainFile;
    newFile: DomainFile;
}

export const isDomainNotificationFileUpdatedData: TypeGuard<DomainNotificationFileUpdatedData> = function (data: unknown): data is DomainNotificationFileUpdatedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainFile(data['previousFile']) ||
        !isDomainFile(data['newFile'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFileUpdatedData: TypeAssert<DomainNotificationFileUpdatedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFileUpdatedData(data)) {
        throwAssertError(variableName, typeName);
    }
};