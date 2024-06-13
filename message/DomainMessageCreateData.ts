import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainMessageType } from './DomainMessage';


export type DomainMessageCreateData = {
    message: string;
    messageType: DomainMessageType;
}

export const isDomainMessageCreateData: TypeGuard<DomainMessageCreateData> = function (data: unknown): data is DomainMessageCreateData {
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

export const assertDomainMessageCreateData: TypeAssert<DomainMessageCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainMessageCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};