import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainServiceErrorItem = {
    code: number;
    target: string;
    title: string;
    messages: string[];
}

export const isDomainServiceErrorItem: TypeGuard<DomainServiceErrorItem> = function (data: unknown): data is DomainServiceErrorItem {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['code'] !== 'number' ||
        typeof data['target'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        !Array.isArray(data['messages']) // Notice: Не проверяется то, что все сообщения являются строками.
    ) {
        return false;
    }

    return true;
};

export const assertDomainServiceErrorItem: TypeAssert<DomainServiceErrorItem> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainServiceErrorItem(data)) {
        throwAssertError(variableName, typeName);
    }
};