import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainServerErrorItem = {
    code: number;
    target: string;
    messages: string[];
}

export const isDomainServerErrorItem: TypeGuard<DomainServerErrorItem> = function (data: unknown): data is DomainServerErrorItem {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['code'] !== 'number' ||
        typeof data['target'] !== 'string' ||
        !Array.isArray(data['messages']) // Notice: Не проверяется то, что все сообщения являются строками.
    ) {
        return false;
    }

    return true;
};

export const assertDomainServerErrorItem: TypeAssert<DomainServerErrorItem> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainServerErrorItem(data)) {
        throwAssertError(variableName, typeName);
    }
};