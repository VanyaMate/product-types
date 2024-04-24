import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainNotification = {
    dateMs: number;
    type: string;
    data: string;
}

export const isDomainNotification: TypeGuard<DomainNotification> = function (data: unknown): data is DomainNotification {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['dateMs'] !== 'number' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotification: TypeAssert<DomainNotification> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotification(data)) {
        throwAssertError(variableName, typeName);
    }
};