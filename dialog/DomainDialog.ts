import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser } from '../user/DomainUser';
import { DomainMessage } from '../message/DomainMessage';


export type DomainDialog = {
    id: string;
    users: DomainUser[];
    messages: DomainMessage[];
}

export const isDomainDialog: TypeGuard<DomainDialog> = function (data: unknown): data is DomainDialog {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        !Array.isArray(data['users']) ||
        !Array.isArray(data['messages'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainDialog: TypeAssert<DomainDialog> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainDialog(data)) {
        throwAssertError(variableName, typeName);
    }
};