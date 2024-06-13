import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainMessageType } from './DomainMessage';


export type DomainMessageUpdateData = {
    message: string;
    messageType: DomainMessageType;
}

export const isDomainMessageUpdateData: TypeGuard<DomainMessageUpdateData> = function (data: unknown): data is DomainMessageUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        typeof data['messageType'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainMessageUpdateData: TypeAssert<DomainMessageUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainMessageUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};