import { DomainUser, isDomainUser } from '../user/DomainUser';
import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainCall = {
    id: string;
    user: DomainUser;
    finished: boolean;
    initiatorId: string;
    creationDate: number;
    finishedDate: number;
    connectionId: string;
}

export const isDomainCall: TypeGuard<DomainCall> = function (data: unknown): data is DomainCall {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['finished'] !== 'boolean' ||
        typeof data['initiatorId'] !== 'string' ||
        typeof data['creationDate'] !== 'number' ||
        typeof data['finishedDate'] !== 'number' ||
        typeof data['connectionId'] !== 'string' ||
        !isDomainUser(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainCall: TypeAssert<DomainCall> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainCall(data)) {
        throwAssertError(variableName, typeName);
    }
};