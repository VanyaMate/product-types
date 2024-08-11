import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationStateUpdateData = boolean;

export const isDomainNotificationStateUpdateData: TypeGuard<DomainNotificationStateUpdateData> = function (data: unknown): data is DomainNotificationStateUpdateData {
    return typeof data === 'boolean';
};

export const assertDomainNotificationStateUpdateData: TypeAssert<DomainNotificationStateUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationStateUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};