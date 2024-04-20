import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainImage = {
    id: string;
    title: string;
    url: string;
}

export const isDomainImage: TypeGuard<DomainImage> = function (data: unknown): data is DomainImage {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['url'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainImage: TypeAssert<DomainImage> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainImage(data)) {
        throwAssertError(variableName, typeName);
    }
};