import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';
import { DomainImage, isDomainImage } from './DomainImage';


export type DomainImageFull =
    DomainImage
    & {
        description: string;
    }

export const isDomainImageFull: TypeGuard<DomainImageFull> = function (data: unknown): data is DomainImageFull {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['description'] !== 'string' ||
        !isDomainImage(data)
    ) {
        return false;
    }

    return true;
};

export const assertDomainImageFull: TypeAssert<DomainImageFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainImageFull(data)) {
        throwAssertError(variableName, typeName);
    }
};